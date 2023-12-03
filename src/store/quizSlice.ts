import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance';
import { AxiosError } from 'axios';

interface QuizState {
  isLoaded: boolean;
  quiz: any | null;
  error: string | null | any;
}

const retryWithBackoff = async (dispatch: any, actionCreator: any): Promise<any> => {
  try {
    const result = await dispatch(actionCreator());
    return result.payload;
  } catch (error) {
    throw error;
  }
};

export const fetchQuiz = createAsyncThunk(
  'quiz/fetchQuiz',
  async (totalQuiz: number, thunkApi): Promise<any> => {
    try {
      const url = `?amount=${totalQuiz}`;
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response && error.response.status === 429) {
        console.log(`Too many requests. Retrying in 5 seconds...`);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const result = await retryWithBackoff(thunkApi.dispatch, fetchQuiz);
        console.clear()
        return result;
      } else {
        throw error;
      }
    }
  }
);

function isAxiosError(error: any): error is AxiosError {
    return error.isAxiosError === true;
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    isLoaded: false,
    quiz: null,
    error: null,
  } as QuizState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuiz.pending, (state) => {
        state.isLoaded = false;
        state.quiz = null;
        state.error = null;
      })
      .addCase(fetchQuiz.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoaded = true;
        state.quiz = action.payload;
        state.error = null;
      })
      .addCase(fetchQuiz.rejected, (state, action: PayloadAction<any> | any) => {
        state.isLoaded = false;
        state.quiz = null;
        state.error = action.error.message;
      });
  },
});

export default quizSlice.reducer;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Quiz from "../../common/quiz/Quiz";
import { fetchQuiz } from "../../../store/quizSlice"; 
import { useResult } from "../../../context/resultContext";
import { RootState } from "../../../store/store"; 
import { ThunkDispatch } from "redux-thunk";

function TriviaPage() {
  const { quiz, isLoaded, error } = useSelector((state: RootState) => state.quiz);
  const { totalQuiz, correct, setCorrect, setIsResultReady } = useResult();
  const [quizCount, setQuizCount] = useState(0);
  const dispatch = useDispatch<ThunkDispatch<RootState, any, any>>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchQuiz(totalQuiz));
  }, [dispatch, totalQuiz]);

  const nextHandler = () => {
    if (quizCount < totalQuiz - 1) {
      setQuizCount((count) => count + 1);
    } else {
      setIsResultReady(true);
      navigate('/result');
    }
  };

  return (
    <React.Fragment>
      {!error && (
        <React.Fragment>
          {isLoaded && (
            <section className="quiz">
              <Quiz data={{ quiz, quizCount, totalQuiz, nextHandler, correct, setCorrect }} />
            </section>
          )}

          {!isLoaded && <div className="loading"></div>}
        </React.Fragment>
      )}
      {error && <h2>{error}</h2>}
    </React.Fragment>
  );
}

export default TriviaPage;

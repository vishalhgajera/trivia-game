import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface ResultContextProps {
  totalQuiz: number;
  correct: number;
  setCorrect: Dispatch<SetStateAction<number>>;
  isResultReady: boolean;
  setIsResultReady: Dispatch<SetStateAction<boolean>>;
}

const resultContext = createContext<ResultContextProps | undefined>(undefined);

export const useResult = (): ResultContextProps => {
  const context = useContext(resultContext);
  if (!context) {
    throw new Error("useResult must be used within a ResultProvider");
  }
  return context;
};

interface ResultProviderProps {
  children: ReactNode;
}

const ResultProvider: React.FC<ResultProviderProps> = ({ children }: ResultProviderProps) => {
  const totalQuiz = 10;
  const [correct, setCorrect] = useState(0);
  const [isResultReady, setIsResultReady] = useState(false);

  const resultHandler: Dispatch<SetStateAction<number>> = (count) => {
    setCorrect(count);
  };

  const displayResultHandler: Dispatch<SetStateAction<boolean>> = (param) => {
    setIsResultReady(param);
  };
  
  return (
    <resultContext.Provider value={{ 
      totalQuiz, 
      correct, 
      setCorrect: resultHandler, 
      isResultReady, 
      setIsResultReady: displayResultHandler
    }}>
      {children}
    </resultContext.Provider>
  );
};

export default ResultProvider;

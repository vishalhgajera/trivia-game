import React from "react";
import parser from "html-react-parser";

interface AnswerProps {
  ans: {
    answer: string;
    correctAnswer: string;
    quizCount: number;
    userAnswer: boolean | null;
    index: number;
    handleAnswer: (val: string) => void;
  };
}

const Answer: React.FC<AnswerProps> = ({ ans }) => {
  const { answer, correctAnswer, quizCount, userAnswer, index, handleAnswer } = ans;

  return (
    <div
      className={`answer-box ${
        userAnswer !== null && answer === correctAnswer
          ? "correct"
          : ""
      }`}
    >
      <input
        type="radio"
        name={`answer_${quizCount}`}
        id={`answer_${index}`}
        onChange={(e) => handleAnswer(answer)}
      />
      <label className="answer-btn" htmlFor={`answer_${index}`}>
        {parser(answer)}
      </label>
    </div>
  );
};

export default Answer;

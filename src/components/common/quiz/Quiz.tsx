import React, { useState, useEffect } from "react";
import parser from "html-react-parser";
import Answer from "../answer/Answer";
import Button from "../button/Button";
import CountBox from "../countbox/CountBox";

interface QuizProps {
  data: {
    quiz: {
      results: {
        question: string;
        incorrect_answers: string[];
        correct_answer: string;
      }[];
    };
    quizCount: number;
    nextHandler: () => void;
    totalQuiz: number;
    correct: number;
    setCorrect: React.Dispatch<React.SetStateAction<number>>;
  };
}

function Quiz({ data }: QuizProps) {
  const { quiz, quizCount, nextHandler, totalQuiz, correct, setCorrect } = data;

  const [userAnswer, setUserAnswer] = useState< boolean | null>(null);
  const [value, setValue] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(true);

  const question = quiz.results[quizCount].question;
  const correctAnswer = quiz.results[quizCount].correct_answer;
  const shuffledAnswers = [
    ...quiz.results[quizCount].incorrect_answers,
    correctAnswer,
  ].sort().reverse();

  useEffect(() => {
    setUserAnswer(null);
    setValue(null);
    setIsValid(true);
  }, [quizCount]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const isCorrect:boolean = correctAnswer === value;

    if (value) {
      setUserAnswer(isCorrect);
      setIsValid(true);
      if (isCorrect) {
        setCorrect(correct + 1);
      }
    } else {
      setIsValid(false);
    }
  };

  const resetAnswer = () => {
    setUserAnswer(null);
    setValue(null);
  };

  const handleNextQuestion = () => {
    resetAnswer();
    nextHandler();
  };

  const handleAnswer = (val: string) => {
    setValue(val);
    setIsValid(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <CountBox count={{ quizCount, totalQuiz, correct }} />
      <article className="container">
        <h2> {parser(question)}</h2>
        <div className="btn-container">
          {shuffledAnswers.map((answer, index) => (
            <Answer key={answer} ans={{ answer, correctAnswer, quizCount, userAnswer, index, handleAnswer }} />
          ))}
        </div>
      </article>
      {userAnswer == null && (
        <div className="button-box">
          <Button
            type="submit"
            className={`submit-btn ${userAnswer !== null ? (userAnswer ? "correct" : "incorrect") : ""}`}
          >
            Submit Question
          </Button>
          {!isValid && <h4 className="feedback incorrect">Select any answer</h4>}
        </div>
      )}
      {userAnswer !== null && (
        <div className="button-box">
          <h4 className={`feedback ${userAnswer ? "correct" : "incorrect"}`}>
            {userAnswer ? "Correct!" : `Incorrect. The correct answer is: ${correctAnswer}`}
          </h4>
          <Button type="button" className="next-question" onClick={handleNextQuestion}>
            Next Question
          </Button>
        </div>
      )}
    </form>
  );
}

export default Quiz;

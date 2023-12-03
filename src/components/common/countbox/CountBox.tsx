interface CountBoxProps {
  count: {
    quizCount: number;
    totalQuiz: number;
    correct: number;
  };
}

function CountBox({ count }: CountBoxProps) {
  const { quizCount, totalQuiz, correct } = count;

  return (
    <div className="count-box">
      <p className="correct-answers">Correct Answer: {correct}</p>
      <p className="correct-answers">
        Question Count: {quizCount + 1}/{totalQuiz}
      </p>
    </div>
  );
}

export default CountBox;
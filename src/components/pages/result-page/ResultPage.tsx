import { useEffect } from 'react'
import { useResult } from '../../../context/resultContext'; 
import { useNavigate } from 'react-router-dom';
function ResultPage() {

  const {totalQuiz, correct, isResultReady } = useResult();

  const navigate = useNavigate();
  
  useEffect(() => {
    if(!isResultReady){
      navigate('/')
    }
  }, [isResultReady, navigate])
  

  return (
    <section className="quiz">
        <h1>Result</h1>
        <h4>Total Questions Served : {totalQuiz}</h4>
        <h4>Total Correct Questions : {correct} </h4>
        <h4>Total Incorrect Questions : {totalQuiz - correct}</h4>
    </section>
  )
}

export default ResultPage

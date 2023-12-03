import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TriviaPage from './components/pages/trivia-page/TriviaPage'
import ResultPage from './components/pages/result-page/ResultPage'


function AppRoutes() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<TriviaPage/>} />
            <Route path='/result' element={<ResultPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

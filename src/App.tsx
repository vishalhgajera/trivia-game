import './App.css';
import AppRoutes from './AppRoutes';
import ResultProvider from './context/resultContext';

function App() {
  return (
    <div className="App">
      <ResultProvider>
        <AppRoutes/>
      </ResultProvider>
    </div>
  );
}

export default App;

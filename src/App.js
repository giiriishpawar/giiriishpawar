import './App.css';
import ProgressBar from './components/ProgressBar';

let name = 'G I R I S H  P A W A R';
function App() {
  return (
    <>
      <ProgressBar></ProgressBar>
      <div className="App">
        <header className="App-header">
          <p>
            <b>{name}</b>
          </p>
        </header>
      </div>
    </>
  );
}

export default App;

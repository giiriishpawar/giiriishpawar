import './App.css';
import Navbar from'./components/home/Navbar';

let firstName = 'G I R I S H';
let lastName = 'P A W A R';
function App() {
  return (
      <div className="App">
        <Navbar title="Girish Pawar" aboutText="About" />
        <header className="App-header">
          <p>
            <b>{firstName}&nbsp;&nbsp;&nbsp;&nbsp;{lastName}</b>
          </p>
        </header>
      </div>
  );
}

export default App;

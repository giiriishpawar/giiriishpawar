import './App.css';
import Navbar from'./components/home/Navbar';
import TextForm from './utils/text_utils/TextForm';

let firstName = 'G I R I S H';
let lastName = 'P A W A R';
function App() {
  return (
    <div className="container">
      <header className="App-header">
        <Navbar title="Girish Pawar" aboutText="About" />
        {/* <Navbar/> */}
        {/* for isRequired 
        <Navbar title="Girish Pawar"/> */}
      </header>
      <section>
        <p>
          <b>{firstName}&nbsp;&nbsp;&nbsp;&nbsp;{lastName}</b>
        </p>
        <TextForm lable="Enter text to Analysis"/>
      </section>
    </div>
  );
}

export default App;

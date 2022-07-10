import React, {useState} from 'react'
import './App.css';
//import About from './components/home/About';
import Navbar from'./components/home/Navbar';
import TextForm from './utils/text_utils/TextForm';

let firstName = 'G I R I S H';
let lastName = 'P A W A R';
function App() {
  const [mode, steMode] = useState('light')
  const toggleMode = ()=> {
    if (mode === 'dark') {
      steMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      steMode('dark');
      document.body.style.backgroundColor = '#292F33';
    }
  }
  return (
    <div className="container">
      <header className="App-header">
        <Navbar title={`${firstName} ${lastName} . I N`} aboutText="About" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar/> */}
        {/* for isRequired 
        <Navbar title="Girish Pawar"/> */}
      </header>
      <section>
        <TextForm lable="Enter text to Analysis" mode={mode}/>
        {/* <About/> */}
        {/* <p>
          <b>{firstName}&nbsp;&nbsp;&nbsp;&nbsp;{lastName}</b>
        </p> */}
      </section>
    </div>
  );
}

export default App;

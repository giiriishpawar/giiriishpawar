
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Alert from './views/Alerts/Alert';
import './App.css';
// import About from './views/About/About';
import Navbar from'./components/layout/navigation/Navbar/Navbar';
import TextForm from './views/Home/TextForm';

let firstName = 'G I R I S H';
let lastName = 'P A W A R';
function App() {

  const showAlert = (message, type)=> {
    setAlert({
      type: type,
      msg: message
    });
    setTimeout(()=>{
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=> {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark Mode Disabled', 'Warning');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#292F33';
      showAlert('Dark Mode Enabled', 'Success');
    }
  }

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  return (
    <div className="container">
      <header className="App-header">
        <Navbar title={`${firstName} ${lastName} . I N`} aboutText="About" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar/> */}
        {/* for isRequired 
        <Navbar title="Girish Pawar"/> */}
        <Alert alert={alert}/>
      </header>
      <section>
        <TextForm lable="Enter text to Analysis" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
        {/* <p>
          <b>{firstName}&nbsp;&nbsp;&nbsp;&nbsp;{lastName}</b>
        </p> */}
      </section>
    </div>
  );
}

export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import $ from 'jquery';
import Popper from 'popper.js';
import React, {useState} from 'react';
import './App.css';
import Navbar from'./components/layout/navigation/Navbar/Navbar';
import TextForm from './views/Home/TextForm';
import ProgressBar from './views/ProgressBar/ProgressBar';

const firstName = 'G I R I S H';
const lastName = 'P A W A R';
const navBarMenu = {'single': ['Home', 'About'], 'multi': [{'Utilities': ['String Operations'] }]};

const App = ()=> {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      type: type,
      msg: message
    });
    setTimeout(()=>{
      setAlert(null);
    }, 5000);
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

  return (
    <div className="container">
      <header className="App-header">
        <Navbar title={`${firstName} ${lastName} . I N`} navBarMenu={navBarMenu} mode={mode} toggleMode={toggleMode} alert={alert}/>
      </header>
      <section>
        <ProgressBar mode={mode}></ProgressBar>
          <TextForm lable="Enter text to Analysis" mode={mode} showAlert={showAlert}/>  
      </section>
    </div>
  );
}

export default App;

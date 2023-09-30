import './ProgressBar.css';

const ProgressBar = (props)=> {
  
    const startClock = ()=> {
        console.log('clock started.')
        startTime();
    } 

    const startTime = ()=> {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
        setTimeout(startTime, 1000);
        document.getElementById("myBar").style.width = s*1.5 + "%";
    }
        
    const checkTime = (i)=> {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

  return (
    <h6>
        <div id="txt" style={{color: props.mode==='light'?'#292F33':'white'}}><a href="#" onClick={startClock}>Show Clock</a> </div>
        <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
        </div>
    </h6>
  );
} 

export default ProgressBar;
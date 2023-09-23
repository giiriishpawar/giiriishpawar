import './ProgressBar.css';

export default function ProgressBar(props) {
  
    const startClock = ()=> {
        console.log('clock started.')
        startTime();
    } 

    function startTime() {
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
        
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

  return (
    <>

        <div id="txt" style={{color: props.mode==='light'?'#292F33':'white'}}><a href="#" onClick={startClock}>Start</a> </div>
        <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
        </div>
        
    </>
  );
} 
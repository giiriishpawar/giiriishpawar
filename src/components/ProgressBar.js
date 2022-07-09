import '../css/ProgressBar.css';

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
        document.getElementById("myBar").style.width = s + "%"
    }
        
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

  return (
    <>
        <div id="txt"></div>
        {/* <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
        </div>  */}
    </>
  );
}

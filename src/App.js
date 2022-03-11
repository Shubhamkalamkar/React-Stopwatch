import './App.css';
import React, {useState} from 'react';

var adjustInterval = undefined;
function App() {
  const [time, setTime] = useState(0);
  const [dis, setDis] = useState(false);

  const startWatch = ()=>{
    adjustInterval = setInterval(()=>{
      setTime((x)=>x+1)
      setDis(true);
    },1000)
  }

  const stopWatch = ()=>{
    clearInterval(adjustInterval);
    setDis(false);
  }

  const reseteWatch = ()=>{
    setTime(0);
    clearInterval(adjustInterval);
    setDis(false);
  }

  return (
    <div className="App">
      <h1>StopWatch</h1>
      <h1>{time}</h1>
      <button className='start' disabled = {dis} onClick={startWatch}>Start</button>
      <button className='stop' onClick={stopWatch}>Stop</button>
      <button className='reset' onClick={reseteWatch}>Reset</button>
    </div>
  );
}

export default App;

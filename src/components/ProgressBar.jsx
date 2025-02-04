import { useEffect, useState } from "react";

export default function ProgressBar({timer, finishTimer}){
  const [timeRemaining, setTimeRemaining] = useState(timer);

  useEffect(() => {
    console.log('setTimeout');
    
    const timeout = setTimeout(finishTimer, timer);
    return () => clearTimeout(timeout);
  }, [timer, finishTimer]);

  useEffect(() => {
    console.log('setInterval');
    const interval = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => {
        return prevTimeRemaining - 10;
      });
      
    }, 10);
  
    return () => {
      clearInterval(interval);
    }
  }, [])
  
  return (
    <progress id="question" max={timer} value={timeRemaining} />
  )
}
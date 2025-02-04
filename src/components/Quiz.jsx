import { useState } from "react";
import questions from "../Data/questions"
import QuizItemComponent from "./QuizItemComponent";
import quizComplete from '../assets/quiz-complete.png';
import ProgressBar from "./ProgressBar";

const TIMER = 10000;
export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function onAnswerClick(answer){
    setCurrentIndex(prevIndex => {
      if (prevIndex === questions.length - 1) {
        return -1;
      } else {
        return prevIndex + 1;
      }
    });
    setUserAnswers(prevAnswers => [...prevAnswers, answer]); 
    if (questions[currentIndex].answers[0] === answer) {
      setCorrectAnswers(prevAnswerCount => {
        return prevAnswerCount + 1;
      })
    }
  }

  function finishTimer(val){
    if (userAnswers.length === questions.length) {
      restartQuiz();
    } else {
      onAnswerClick(val);
    }
  }

  function restartQuiz() {
    setCurrentIndex(0);
    setUserAnswers([]);
    setCorrectAnswers(0);
  }

  return (
    <div id="quiz"> 
    {currentIndex === -1 ?
      <div id="summary">
        <img src={quizComplete}/>
        <h1>Thanks for playing</h1>
        <p>You Score is: {correctAnswers}/{questions.length}</p>
        <button className="answer" onClick={restartQuiz}>Restart Quiz</button>
      </div> :
      <div id="question" key={questions[currentIndex].id}>
        <QuizItemComponent
          question={questions[currentIndex].text}
          options={questions[currentIndex].answers}
          onAnswerClick={onAnswerClick}/>
        <ProgressBar timer={TIMER} finishTimer={finishTimer}/>
      </div>
    }
    </div>
  );
}
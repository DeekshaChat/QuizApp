import questions from "../Data/questions"
import QuizItemComponent from "./QuizItemComponent";

export default function Quiz() {
  return (
    <div id="quiz"> 
    {
      questions.map((question) => { 
        return (
          <div id="question" key={question.id}>
            <QuizItemComponent question={question.text} options={question.answers} />
          </div>
        )
      }
    )
  }
  </div>
  );
}
export default function QuizItemComponent({ question, options, onAnswerClick}) {
  const randomAnswerOptions = [...options].sort(() => Math.random() - 0.5);
  return (
      <>
        <h2>{question}</h2>
        <ul id="answers">
        {
          randomAnswerOptions.map((option) => {
            return (
              <li className="answer" key={option}>
                <button key={option} onClick={() => onAnswerClick(option)}>{option}</button>
              </li>
            )
          })
        }
        </ul>
      </>
  )
}
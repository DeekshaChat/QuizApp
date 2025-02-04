export default function QuizItemComponent({ question, options}) {
  return (
      <>
        <h2>{question}</h2>
        <ul id="answers">
        {
          options.map((option) => {
            return (
              <li className="answer" key={option}>
                <button key={option} >{option}</button>
              </li>
            )
          })
        }

        </ul>
      </>
  )
}
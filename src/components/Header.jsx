import HeaderLogo from './../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={HeaderLogo}/>
      <h1>React Quiz</h1>
    </header>
  )
}
import Game from "./Components/Quiz/Game"
import Result from "./Components/Quiz/Result"
import "./Components/Quiz/Quiz.scss"
import { useState } from 'react'

const questions = [
  {
   title: 'React is this...?',
   variants: ['library', 'framework', 'application'],
   correct: 0
  },
  {
   title: 'Component is this...?',
   variants: ['application', 'part of application', 'something other...'],
   correct: 1
  },
  {
   title: 'What is JSX...',
   variants: ['just HTML', 'function', 'the same HTML, but with the ability to execute JS code'],
   correct: 2
  }
]


function App() {

  const [step, setStep] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) =>{
    console.log(step, index)
    setStep(step+1)
  }

  return (
    <div className="App">
      <Game question={question} onClickVariant={onClickVariant} step={step} questions={questions}/>
      {/* <Result/> */}
    </div>
  );
}

export default App;

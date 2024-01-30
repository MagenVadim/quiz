import React from 'react'

function Game({step, question, onClickVariant, questions}) {

  const percentage = Math.round(step/questions.length*100);
  console.log(percentage);

  return (
    <>
      <div className="progress">
        <div style={{width: `${percentage}%`}} className="progress__inner"></div>
      </div>  
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map( (elem, index)=>
               <li key={elem} onClick={()=> onClickVariant(index)}>{elem}</li>
              )
          }
        </ul>
    </>
  )
}

export default Game

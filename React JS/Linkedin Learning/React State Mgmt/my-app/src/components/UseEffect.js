import React, { useEffect, useReducer, useState } from 'react'
import { Form } from 'react-router-dom';

function Result({result, input}) {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const answer = result === parseInt(input)
    setMessage(answer ?  " You guessed it right"  : "try again!")
    if(!result){
      setMessage("")
    }
  },[result, input])

  return (
    <div
      className='d-flex flex-column justify-content-between'
      style={{ width: "50%" }}>
      <div className={`d-flex justify-content-center mb-5`}>
        <p className='h1'>{message}</p>
      </div>
    </div>
  )
}

const initialState  = {
  values : {
    random1: 0,
    random2: 0
  },
  result: 0
  }
function reducer (state, action){
  switch(action.type){
    case 'setValues':
      return {...state, values: action.payload.values}
    case 'setInput':
      return {...state, input: action.payload.input}
    case 'checkResult':
      return {...state, result: action.payload.result}
    default:
      return state
  }
}

const UseEffect = () => {
  const [state, dispatch] = useReducer(reducer, initialState){

  }
  const [values, setValues] = useState({ random1: 0, random2: 0 })
  const [input, setInput] = useState(0)
  const [result, setResult] = useState(0)

  const generateRandomValues = () => {
    const random1 = Math.floor(Math.random() * 50);
    const random2 = Math.floor(Math.random() * 50);
    setValues({ random1, random2 });
  };

  const guessTheNumber = () => {
    // checkResult(values.random1 + values.random2)

  }

  return (
    <div className='p-5' style={{ width: "80%" }}>
      <fieldset>
        <legend className='text-bold'>Guess the Number</legend>
        <div className='d-flex justify-content-around'>
          <Form
            generate={generateRandomValues}
            guess={guessTheNumber}
            onChange={setInput}
            value={values}
          />
          <Result result={result} input={input} />
        </div>
      </fieldset>
    </div>
  )
}

export default UseEffect






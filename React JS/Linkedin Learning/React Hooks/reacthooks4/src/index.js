import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


function App() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  const [checked, setChecked] = new useReducer(
    checked => !checked,
    false
  );
  const initialState = {
    message: 'Hello'
  };
  function reducer(state, action) {
    switch (action.type) {
      case 'yell':
        return { message: `HEY! I just said ${state.message}` };
      case 'whisper':
        return { message: `excuse me, I just said ${state.message}` };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1 onClick={() => setNumber(1)} >{number}</h1>
      <input
        type='checkbox'
        id='check'
        onChange={setChecked}
      />
      <label for="check">T & C</label>
      <p>{checked ? "Checked" : "Not checked"}</p>
      <p>Message : {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>WHISPER</button>
      
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

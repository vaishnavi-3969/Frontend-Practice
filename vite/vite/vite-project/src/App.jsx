import { useState } from 'react'
import './App.css'
import './../postcss.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count: { count }</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </>
  )
}

export default App

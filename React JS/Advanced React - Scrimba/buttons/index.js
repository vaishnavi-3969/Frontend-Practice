import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"

function App() {
  return (
    <main>
      <Button text="Click here" />
      {/* The concept of "children" is found everywhere in HTML! */}
      <select>
        <option>Thing 1</option>
        <option>Thing 2</option>
        <option>Thing 3</option>
      </select>
      
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function App() {
  const [name, setName] = useState('Joe')
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `${name}`
  },[name])

  useEffect(() => {
    console.log(`The user is: ${
      admin ? "admin" : "not admin"
    } 
      `)
  },[admin])
  
  return (
    <section style={{ alignContent: 'center', textAlign: 'center', justifyContent: 'center' }}>
      <p>Congratulations {name}</p>
      <button
        onClick={() => setName("Jane")}
        style={{ backgroundColor: '#ddddf4', padding: '5px' }}
      >
        Change Winner
      </button>
      <p>
        {admin ? "logged in": "not logged in"}
      </p>
      <button
        onClick={() => setAdmin(true)}
        style={{ backgroundColor: '#ddddf4', padding: '5px' }}
      >
        Log In
      </button>
    </section>
  )
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


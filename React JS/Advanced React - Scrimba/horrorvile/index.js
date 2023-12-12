import React from 'react';
import ReactDOM from 'react-dom/client';
import Marquee from "./Marquee"

function App() {
  return (
    <main>
      <Marquee text="🧛‍♀️ Welcome to Horrorville 🧛‍♀️" />
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
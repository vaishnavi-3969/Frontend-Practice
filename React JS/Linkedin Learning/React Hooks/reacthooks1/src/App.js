import './App.css';
import { useState } from 'react';
import Confetti from 'react-confetti'

function App() {
  const [confetti, setConfetti] = useState(false)

  return (
    <section>
      {
        confetti &&
        <Confetti
          drawShape={ctx => {
            ctx.beginPath()
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i
              const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
              const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
              ctx.lineTo(x, y)
            }
            ctx.stroke()
            ctx.closePath()
          }}
        />
      }
      <p>Congratulations!</p>
      <button onClick={() => setConfetti(!confetti)}>{confetti ? "Ok Stop :)" : "Surprise Me!"}</button>

    </section>
  );
}

export default App;

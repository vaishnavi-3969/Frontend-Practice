import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FaStar from './images/star.png'
import FiStar from './images/star (1).png'

const createArray = (length) => [
  ...Array(length)
]

function App() {

  return (
    <StarRating totalStars={10} />
  );
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return createArray(totalStars).map((n, i) => (
    <Star
      key={i}
      selected={selectedStars > i}
      onSelect={() => setSelectedStars(i + 1)
      }
    />
  ));
}

function Star({ selected = false, onSelect }) {
  return <img
    src={selected ? FaStar : FiStar}
    alt='star'
    onClick={onSelect}
    style={{ height: "30px", cursor: 'pointer' }}
  />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



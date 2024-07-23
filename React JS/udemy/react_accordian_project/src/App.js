import './index.css';
import { useState } from 'react';

function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const content = [
    [
      "React is extremely popular",
      "It makes building complex, interative UIs a breeze",
      "It's powerful and flexible",
      "It has a very active and versatile ecosystem"
    ], [
      "Components, JSX and Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ], [
      "Official web page (react.dev)",
      "Next.js (full stack framework)",
      "React Native (Build native mobile apps with React)"
    ], [
      "Vanilla JS requires imperative programming",
      "Imperative programming: You define all the steps needed",
      "Declarative programming: You define the outcome you want",
      "React is declarative"
    ]
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <menu className="bg-green-300 p-4 rounded-md mb-4 flex space-x-4">
        <button
          className={`py-2 px-4 rounded-md ${activeContentIndex === 0 ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveContentIndex(0)}
        >
          Why React?
        </button>
        <button
          className={`py-2 px-4 rounded-md ${activeContentIndex === 1 ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveContentIndex(1)}
        >
          Core Features
        </button>
        <button
          className={`py-2 px-4 rounded-md ${activeContentIndex === 2 ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveContentIndex(2)}
        >
          Related Resources
        </button>
        <button
          className={`py-2 px-4 rounded-md ${activeContentIndex === 3 ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveContentIndex(3)}
        >
          React vs JS
        </button>
      </menu>
      <div id='tab-content' className="bg-white p-4 rounded-md shadow-md w-3/4">
        <ul className="list-disc list-inside">
          {
            content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RandomNumber from './components/RandomNumber';
import UseEffect from './components/UseEffect';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/random" element={<RandomNumber/>} exact/>
          <Route path="/use-effect" element={<UseEffect/>} exact/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

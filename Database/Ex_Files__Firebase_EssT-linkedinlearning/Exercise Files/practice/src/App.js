
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let [auth, setAuth] = useState(false);

  return (
    <div>
      <BrowserRouter>
      <Header auth={auth} setAuth={setAuth} />
        <Routes>
          <Route path='/' element={<Home auth={auth} setAuth={setAuth} />} exact />
          <Route path='sign-in' element={<SignIn auth={auth} setAuth={setAuth} />} exact />
          <Route path='sign-up' element={<Register />} exact />
          <Route path='profile' element={<Profile auth={auth} setAuth={setAuth}/>} exact/>
          <Route path='*' element={<Home auth={auth} setAuth={setAuth}/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;

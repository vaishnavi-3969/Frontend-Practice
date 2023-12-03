import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../Firebase';
import { getAuth, signOut } from 'firebase/auth';

const Header = ({ auth, setAuth }) => {
  
  const logout = async () => {
    const authInstance = getAuth(app);
    try {
      await signOut(authInstance);
      setAuth(false);
      alert("Successfully logged out");
      window.location.href = '/sign-in';
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <nav>
      <ul className='flex bg-yellow-950 '>
        <li className='m-1 p-1 bg-yellow-100 hover:bg-red-600 hover:text-white rounded-sm'>
          Logo
        </li>
        <li className='m-1 p-1 bg-yellow-100 hover:bg-red-600 hover:text-white rounded-sm'>
          <Link to="/">Home</Link>
        </li>
        <li className='m-1 p-1 bg-yellow-100 hover:bg-red-600 hover:text-white rounded-sm'>
          <Link to="profile">Profile</Link>
        </li>
        <li className='m-1 p-1 bg-yellow-100 hover:bg-red-600 hover:text-white rounded-sm'>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

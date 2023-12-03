import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../Firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const SignIn = ({a,sa}) => {
    const [authenticated, setAuthenticated] = useState({a,sa});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app);

    const loginIn = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            alert('Please enter your email and password');
        } else {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                setAuthenticated(true);
                alert("Successfully logged in user with uid:", auth.currentUser?.uid);
                window.location.href = '/home';
            } catch (err) {
                alert(err.message);
            }
        }
    };

    return (
       <>
        {
        authenticated ? (
            <div className='flex items-center justify-center h-screen'>
            <form className='bg-yellow-100 p-8 rounded-lg shadow-md'>
                <label className='block mb-4'>
                    <span className='text-gray-700'>Email:</span>
                    <input
                        type='email'
                        name='name'
                        placeholder='e.g., John Doe'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className='form-input mt-1 block w-full rounded-md border-gray-300 p-1'
                    />
                </label>
                <label className='block mb-4'>
                    <span className='text-gray-700'>Password:</span>
                    <input
                        type='password'
                        name='password'
                        placeholder='e.g., *****'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        className='form-input mt-1 block w-full rounded-md border-gray-300  p-1'
                    />
                </label>
                <button
                    type='submit'
                    onClick={loginIn}
                    className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
                >
                    Login
                </button>
                <br />
                <Link to="sign-up">
                    Don't have an account?
                    <button className='text-blue-500'>
                        Register
                    </button>
                </Link>
            </form>
        </div>
        ):(
            <div>
                <h1>Already logged in</h1>
            </div>
        )
       }
       </>
    );
};

export default SignIn;

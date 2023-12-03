import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../Firebase';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app);

    const signUp = async (e) => {
        e.preventDefault();
        
        if (email === '' || password === '') {
            alert('Please enter your email and password');
        } else {
            try {
                await createUserWithEmailAndPassword(auth,email,password);
                console.log("Successfully created user with uid:", auth.currentUser?.uid);
                window.location.href = '/sign-in';
            } catch (err) {
                alert(err.message);
            }
        }
    };


    return (
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
                    onClick={signUp}
                    className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
                >
                    Register
                </button>
                <br />
                <Link to="login">
                    Already have an account?
                    <button className='text-blue-500'>
                        Login
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Register;

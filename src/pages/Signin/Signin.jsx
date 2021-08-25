import React from 'react';
import './Signin.css';

export default function Signin() {
  const signin = e => {
    e.preventDefault();
  };

  return (
    <div className='signin'>
      <form>
        <h1>Sign in</h1>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Sign in</button>
        <h4>
          <span className='signin_grey'>New to WatchFlix? </span>
          <span className='signin_link'>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import './Login.css';
import Signin from '../Signin/Signin';

export default function Login() {
  const [signin, setSignin] = useState(false);

  return (
    <div className='login'>
      <div className='login_background'>
        <button className='login_button' onClick={() => setSignin(true)}>
          Sign in
        </button>
        <div className='login_gradient' />
      </div>
      <div className='login_body'>
        {signin ? (
          <Signin />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className='login_input'>
              <form>
                <input type='email' placeholder='Email' />
                <button
                  onClick={() => setSignin(true)}
                  className='login_getStarted'
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

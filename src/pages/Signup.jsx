import React from 'react';
import history from '../history';
import { makeStyles, Typography, Button } from '@material-ui/core';
import ImageOverlay from '../components/ImageOverlay';
import Auth from '../components/Auth';

const useStyles = makeStyles(theme => ({
  redButton: {
    ...theme.button,
    ...theme.buttonRedAnimation,
    fontSize: '1em',
    padding: '0.4em 2em',
    color: 'black',
    [theme.breakpoints.down('xs')]: {
      padding: '0.8em 1.4em',
      width: '85%'
    }
  }
}));

const Signup = ({ googleSignInStart, signUpStart }) => {
  const classes = useStyles();

  const onSubmit = async ({ displayName, email, password }) => {
    signUpStart({ displayName, email, password });
  };

  const authContent = {
    formName: 'signupForm',
    title: 'Already have an account',
    onSubmit,
    fields: [
      { name: 'displayName', type: 'text', label: 'Full Name' },
      { name: 'email', type: 'email', label: 'Email' },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
        inputProps: true
      },
      {
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
        inputProps: true
      }
    ],
    actions: [
      <Button
        type='submit'
        variant='outlined'
        className={classes.redButton}
        color='primary'
      >
        Register
      </Button>,
      <Typography variant='body1'>or login with</Typography>,
      <Button
        className={classes.redButton}
        onClick={googleSignInStart}
        variant='outlined'
      >
        Sign in with google
      </Button>,
      <Typography variant='body1'>
        Already have an account?
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => history.push('/signin')}
        >
          {' '}
          <strong>Login here</strong>
        </span>
      </Typography>
    ]
  };

  return (
    <ImageOverlay>
      <Auth {...authContent} />
    </ImageOverlay>
  );
};

export default Signup;

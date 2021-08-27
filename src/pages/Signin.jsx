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

const Signin = ({ googleSignInStart, emailSignInStart }) => {
  const classes = useStyles();

  const onSubmit = async ({ email, password }) => {
    emailSignInStart({ email, password });
  };

  const authContent = {
    formName: 'signinForm',
    title: 'Already have an account',
    onSubmit,
    fields: [
      { name: 'email', type: 'email', label: 'Email' },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
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
        Sign in
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
        Not yet registered?
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => history.push('/signup')}
        >
          {' '}
          <strong>Create an account</strong>
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

export default Signin;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {
  withStyles,
  Grid,
  Typography,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Textfield from './fields/TextFields';

const useStyles = theme => ({
  contentContainer: {
    width: '25vw',
    border: `1px solid ${theme.palette.common.grey500}`,
    padding: '2em',
    background: '#fff',
    borderRadius: '25px',
    [theme.breakpoints.down('md')]: {
      width: '50vw'
    },
    [theme.breakpoints.down('sm')]: {
      width: '65vw'
    },
    [theme.breakpoints.down('xs')]: {
      width: '90vw'
    }
  },
  formContainer: { margin: '1.5em 0' }
});

function Auth({ formName, title, onSubmit, fields, actions }) {
  class CustomForm extends Component {
    state = { showPassword: false, showConfirmPassword: false };

    handleShowPassword = fieldName => {
      const { showPassword, showConfirmPassword } = this.state;

      if (fieldName === 'password') {
        this.setState({
          showPassword: !showPassword
        });
      } else {
        this.setState({
          showConfirmPassword: !showConfirmPassword
        });
      }
    };

    render() {
      const { classes, handleSubmit, fields, actions } = this.props;
      const { showPassword, showConfirmPassword } = this.state;

      return (
        <Grid container justifyContent='center' alignItems='center'>
          <Grid
            item
            container
            direction='column'
            className={classes.contentContainer}
          >
            <Grid item>{renderTitle}</Grid>
            <Grid item className={classes.formContainermateria}>
              <form onSubmit={handleSubmit(this.props.onSubmit)}>
                {fields.map((f, i) => (
                  <Field
                    type={
                      f?.type === 'password' &&
                      f?.name === 'password' &&
                      showPassword
                        ? 'text'
                        : f?.type === 'password' &&
                          f?.name === 'confirmPassword' &&
                          showConfirmPassword
                        ? 'text'
                        : f?.type
                    }
                    component={Textfield}
                    fullWidth
                    key={i}
                    name={f.name}
                    label={f.label}
                    InputProps={
                      f?.inputProps
                        ? {
                            endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton
                                  disableRipple
                                  aria-label='toggle password visibility'
                                  onClick={() =>
                                    this.handleShowPassword(f?.name)
                                  }
                                >
                                  {showPassword && f?.name === 'password' ? (
                                    <Visibility />
                                  ) : showConfirmPassword &&
                                    f?.name === 'confirmPassword' ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            )
                          }
                        : null
                    }
                  />
                ))}
                <Grid
                  container
                  direction='column'
                  spacing={2}
                  style={{ width: '100%', marginTop: '1em' }}
                >
                  {actions.map((a, i) => (
                    <Grid item key={i}>
                      {a}
                    </Grid>
                  ))}
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      );
    }
  }

  const renderTitle = <Typography variant='h5'>{title}</Typography>;

  const validate = values => {
    const errors = {};

    if (formName === 'signinForm') {
      const requiredFields = ['email', 'password'];

      requiredFields.forEach(field => {
        if (!values[field]) errors[field] = 'Required';
      });
    } else {
      const requiredFields = [
        'displayName',
        'email',
        'password',
        'confirmPassword'
      ];

      if (values.password !== values.confirmPassword) {
        errors.password = "Password don't match";
        errors.confirmPassword = "Password don't match";
      }

      requiredFields.forEach(field => {
        if (!values[field]) errors[field] = 'Required';
      });
    }

    return errors;
  };

  const mapStateToProps = () => {
    return {
      title,
      onSubmit,
      fields,
      actions
    };
  };

  CustomForm = withStyles(useStyles, { withTheme: true })(
    connect(mapStateToProps)(CustomForm)
  );

  const WrappedForm = reduxForm({
    form: formName,
    validate
  })(CustomForm);

  return <WrappedForm />;
}

export default Auth;

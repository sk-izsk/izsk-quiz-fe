import { Box, InputLabel, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { FcIdea } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Button, CardAction, Divider, H6, TextField } from 'ui-neumorphism';
import { CardContainer } from '../../components';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { useValueForTextField } from '../../utils';
import { loginSchema } from '../../validation';

export interface LoginProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  cardContentStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  btn: {
    maxWidth: 200,
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    width: '100%',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  header: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  divider: {
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  error: {
    color: theme.palette.secondary.main,
  },
}));

const Login: React.FC<LoginProps> = () => {
  const classes = useStyles();
  const [email, handleEmail] = useValueForTextField('');
  const [password, handlePassword] = useValueForTextField('');
  const [error, setError] = useState<string>('');
  const [errorType, setErrorType] = useState<string>('');

  const handleLogin = async (event: KeyboardEvent) => {
    try {
      event.preventDefault();
      setError('');
      setErrorType('');
      const loginDetails = {
        email,
        password,
      };
      const validatedLoginDetails = await loginSchema.validate(loginDetails);
      console.log('this is login details', validatedLoginDetails);
    } catch (err) {
      console.warn(err);
      if (err.path === 'email' && err.name === 'ValidationError') {
        setErrorType(err.path);
        setError(err.message);
      }
      if (err.path === 'password' && err.name === 'ValidationError') {
        setErrorType(err.path);
        setError(err.message);
      }
    }
  };

  return (
    <Box className={classes.mainContainer}>
      <CardContainer
        cardContentStyle={classes.cardContentStyle}
        inset={true}
        cardAction={
          <>
            <Divider className={classes.divider} />
            <CardAction className={classes.btnContainer}>
              <Link className={classes.link} to='/sign-up'>
                <Button disabled={false} className={classes.btn} rounded color={theme.palette.primary.main}>
                  Sign Up
                </Button>
              </Link>
              <Button
                disabled={false}
                className={classes.btn}
                rounded
                color={theme.palette.success.contrastText}
                bgColor={theme.palette.primary.main}
                onClick={handleLogin}
              >
                Login
              </Button>
            </CardAction>
          </>
        }
      >
        <FcIdea size={70} />
        <H6 className={classes.header}>Ready to take the challenge !!!</H6>
        <TextField
          className={classes.inputContainer}
          width={400}
          placeholder='Enter your email'
          value={email}
          onChange={handleEmail}
          disabled={false}
          autofocus
        />
        {errorType === 'email' && error.length > 0 && <InputLabel className={classes.error}>{error}</InputLabel>}
        <TextField
          className={classes.inputContainer}
          width={400}
          placeholder='Enter your password'
          value={password}
          onChange={handlePassword}
          disabled={false}
          type='password'
        />
        {errorType === 'password' && error.length > 0 && <InputLabel className={classes.error}>{error}</InputLabel>}
      </CardContainer>
    </Box>
  );
};

export default Login;

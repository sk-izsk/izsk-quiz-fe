import { Box, InputLabel, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { FcIdea } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, CardAction, Divider, H6, TextField } from 'ui-neumorphism';
import { CardContainer } from '../../components';
import { Actions } from '../../redux/';
import { Account, addError } from '../../redux/accountSlice';
import { RootState } from '../../redux/store';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { useValueForTextField } from '../../utils';
import { loginSchema } from '../../validation';
import { LoginSchema } from '../../validation/loginSchema';

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
  const dispatch = useDispatch();
  const user: Account = useSelector<RootState, Account>((state: RootState) => state.account);
  const [loading, setLoading] = useState<boolean>(user.isLoggedIn);

  const handleLogin = async (event: KeyboardEvent) => {
    try {
      event.preventDefault();
      setError('');
      dispatch(addError({ error: '' }));
      setErrorType('');
      setLoading(true);
      const loginDetails: LoginSchema = {
        email,
        password,
      };
      const validatedLoginDetails = await loginSchema.validate(loginDetails);
      console.log('this is login details', validatedLoginDetails);
      dispatch(Actions.getLogin(validatedLoginDetails as LoginSchema));
    } catch (err) {
      console.warn(err);
      if (['email', 'password'].includes(err.path) && err.name === 'ValidationError') {
        setErrorType(err.path);
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    if (user.error) {
      setLoading(false);
    }
  }, [user.error]);

  return (
    <Box className={classes.mainContainer}>
      <CardContainer
        cardContentStyle={classes.cardContentStyle}
        inset={true}
        cardLoading={loading}
        cardAction={
          <>
            <Divider className={classes.divider} />
            <CardAction className={classes.btnContainer}>
              <Link className={classes.link} to='/sign-up'>
                <Button disabled={loading} className={classes.btn} rounded color={theme.palette.primary.main}>
                  Sign Up
                </Button>
              </Link>
              <Button
                disabled={loading}
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
          disabled={loading}
          autofocus
        />
        {errorType === 'email' && error.length > 0 && <InputLabel className={classes.error}>{error}</InputLabel>}
        <TextField
          className={classes.inputContainer}
          width={400}
          placeholder='Enter your password'
          value={password}
          onChange={handlePassword}
          disabled={loading}
          type='password'
        />
        {errorType === 'password' && error.length > 0 && <InputLabel className={classes.error}>{error}</InputLabel>}
        {user.error && user.error.length > 0 && <InputLabel className={classes.error}>{user.error}</InputLabel>}
      </CardContainer>
    </Box>
  );
};

export default Login;

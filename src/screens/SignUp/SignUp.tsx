import { Box, InputLabel, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { FcIdea } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, CardAction, H6, TextField } from 'ui-neumorphism';
import { CardContainer } from '../../components';
import { Actions, addError } from '../../redux';
import { Account } from '../../redux/accountSlice';
import { RootState } from '../../redux/store';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { useValueForTextField } from '../../utils';
import { signUpSchema } from '../../validation';
import { SignUpSchema } from '../../validation/signUpSchema';

export interface SignUpProps {}

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
  error: {
    color: theme.palette.secondary.main,
  },
}));

const SignUp: React.FC<SignUpProps> = () => {
  const classes = useStyles();
  const [nickName, handleNickName] = useValueForTextField('');
  const [email, handleEmail] = useValueForTextField('');
  const [password, handlePassword] = useValueForTextField('');
  const [confirmPassword, handleConfirmPassword] = useValueForTextField('');
  const [error, setError] = useState<string>('');
  const [errorType, setErrorType] = useState<string>('');
  const dispatch = useDispatch();
  const user: Account = useSelector<RootState, Account>((state: RootState) => state.account);
  const [loading, setLoading] = useState<boolean>(user.isLoggedIn);

  useEffect(() => {
    if (user.error) {
      setLoading(false);
    }
  }, [user.error]);

  const handleSignUp = async (event: KeyboardEvent) => {
    try {
      event.preventDefault();
      setError('');
      setErrorType('');
      dispatch(addError({ error: '' }));
      setLoading(true);
      const signUpDetails: SignUpSchema = {
        email,
        nickName,
        password,
        confirmPassword,
      };
      const validatedSignUpDetails: SignUpSchema = (await signUpSchema.validate(signUpDetails)) as SignUpSchema;
      dispatch(Actions.getSignUp(validatedSignUpDetails));
    } catch (err) {
      console.warn(err);
      if (['email', 'password', 'nickName', 'confirmPassword'].includes(err.path) && err.name === 'ValidationError') {
        setErrorType(err.path);
        setError(err.message);
      }
    }
  };

  return (
    <Box className={classes.mainContainer}>
      <CardContainer
        cardContentStyle={classes.cardContentStyle}
        cardLoading={loading}
        inset={true}
        cardAction={
          <CardAction className={classes.btnContainer}>
            <Link className={classes.link} to='/login'>
              <Button disabled={loading} className={classes.btn} rounded color={theme.palette.primary.main}>
                Login
              </Button>
            </Link>
            <Button
              disabled={loading}
              onClick={handleSignUp}
              className={classes.btn}
              rounded
              color={theme.palette.success.contrastText}
              bgColor={theme.palette.primary.main}
            >
              Sign Up
            </Button>
          </CardAction>
        }
      >
        <FcIdea size={70} />
        <H6 className={classes.header}>Ready to take the challenge !!!</H6>
        <TextField
          className={classes.inputContainer}
          width={400}
          placeholder='Enter your nick name'
          value={nickName}
          onChange={handleNickName}
          disabled={loading}
          autofocus
        />
        {errorType === 'nickName' && error.length > 0 && <InputLabel className={classes.error}>{error}</InputLabel>}
        <TextField
          className={classes.inputContainer}
          width={400}
          placeholder='Enter your email'
          value={email}
          onChange={handleEmail}
          disabled={loading}
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
        <TextField
          className={classes.inputContainer}
          width={400}
          placeholder='Confirm your password'
          value={confirmPassword}
          onChange={handleConfirmPassword}
          disabled={loading}
          type='password'
        />
        {errorType === 'confirmPassword' && error.length > 0 && (
          <InputLabel className={classes.error}>{error}</InputLabel>
        )}
        {user.error && user.error.length > 0 && <InputLabel className={classes.error}>{user.error}</InputLabel>}
      </CardContainer>
    </Box>
  );
};

export default SignUp;

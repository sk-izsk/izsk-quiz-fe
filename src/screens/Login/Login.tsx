import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { FcIdea } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Button, CardAction, Divider, H6, TextField } from 'ui-neumorphism';
import { CardContainer } from '../../components';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { useValueForTextField } from '../../utils';

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
}));

const Login: React.FC<LoginProps> = () => {
  const classes = useStyles();
  const [email, handleEmail] = useValueForTextField('');
  const [password, handlePassword] = useValueForTextField('');

  const handleLogin = (event: KeyboardEvent) => {
    event.preventDefault();
    console.log(email, password);
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
        <TextField
          className={classes.inputContainer}
          width={400}
          placeholder='Enter your password'
          value={password}
          onChange={handlePassword}
          disabled={false}
          type='password'
        />
      </CardContainer>
    </Box>
  );
};

export default Login;

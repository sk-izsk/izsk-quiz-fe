import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Body1, Button } from 'ui-neumorphism';
import { CardContainer, QuizResultCard } from '../../components';
import { Actions } from '../../redux';
import { Account } from '../../redux/accountSlice';
import { RootState } from '../../redux/store';
import { CustomTheme, theme } from '../../theme/muiTheme';

export interface HomeProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  mainContainer: {
    marginTop: theme.spacing(10),
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr',
  },
  mainContainerMobile: {
    gridTemplateColumns: '1fr 1fr',
  },
  paginateContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  btn: {
    textAlign: 'center',
  },
  emptyContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  emptyCard: {
    margin: theme.spacing(1),
  },
}));

const Home: React.FC<HomeProps> = () => {
  const classes = useStyles();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down(750));
  const dispatch = useDispatch();
  const user: Account = useSelector<RootState, Account>((state: RootState) => state.account);

  useEffect(() => {
    dispatch(Actions.getInformation());
  }, [dispatch]);

  return (
    <>
      {user.isLoggedIn ? (
        <>
          {true ? (
            <Box className={classes.emptyContainer}>
              <CardContainer
                cardStyle={classes.emptyCard}
                cardAction={
                  <Link className={classes.link} to='/quiz'>
                    <Button
                      disabled={false}
                      className={classes.btn}
                      rounded
                      color={theme.palette.success.contrastText}
                      bgColor={theme.palette.primary.main}
                    >
                      Create quiz
                    </Button>
                  </Link>
                }
                inset={true}
              >
                <Body1>
                  Hi {user.user?.nickName}, you don't have any quiz history. Play a quiz first, in order to create the
                  HISTORY!!!!
                  <span aria-label='emoji' role='img'>
                    😛
                  </span>
                </Body1>
              </CardContainer>
            </Box>
          ) : (
            <>
              <Box className={clsx([classes.mainContainer, isMobile && classes.mainContainerMobile])}>
                <QuizResultCard />
                <QuizResultCard />
                <QuizResultCard />
                <QuizResultCard />
                <QuizResultCard />
                <QuizResultCard />
                <QuizResultCard />
                <QuizResultCard />
                <QuizResultCard />
                <QuizResultCard />
                <QuizResultCard />
                <QuizResultCard />
              </Box>
              <Box className={classes.paginateContainer}>
                <Pagination onChange={() => {}} count={10} variant='outlined' color='primary' />
              </Box>
            </>
          )}
        </>
      ) : (
        <Redirect to='/login' />
      )}
    </>
  );
};

export default Home;

import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Body1, Button } from 'ui-neumorphism';
import { QuizHistory } from '../../api/response';
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
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
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

export interface QuizHistoryResponse extends QuizHistory {
  _id: string;
}

const Home: React.FC<HomeProps> = () => {
  const classes = useStyles();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down(750));
  const dispatch = useDispatch();
  const user: Account = useSelector<RootState, Account>((state: RootState) => state.account);
  const history = useHistory();

  useEffect(() => {
    if (history.location.state === undefined) {
      dispatch(Actions.getInformation());
    }
  }, [dispatch, user, history.location.state]);

  return (
    <>
      {user.isLoggedIn && !_.isEmpty(user.user?.quizHistory) ? (
        <>
          {user.user?.quizHistory.length && user.user.quizHistory.length > 0 ? (
            <>
              <Box className={clsx([classes.mainContainer, isMobile && classes.mainContainerMobile])}>
                {user.user?.quizHistory.map((quiz: QuizHistoryResponse & any) => {
                  return <QuizResultCard key={quiz._id} {...quiz} />;
                })}
              </Box>
              {/* <Box className={classes.paginateContainer}>
                <Pagination
                  onChange={() => {}}
                  count={Math.round(user.user.quizHistory.length ? user.user.quizHistory.length / itemsPerPage : 15)}
                  variant='outlined'
                  color='primary'
                />
              </Box> */}
            </>
          ) : (
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
          )}
        </>
      ) : (
        <Redirect to='/login' />
      )}
    </>
  );
};

export default Home;

import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import clsx from 'clsx';
import React from 'react';
import { QuizResultCard } from '../../components';
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
}));

const Home: React.FC<HomeProps> = () => {
  const classes = useStyles();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down(750));

  return (
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
  );
};

export default Home;

import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { QuestionCard, QuizOptionsModal } from '../../components';
import { addQuestions } from '../../redux';
import { CustomTheme } from '../../theme/muiTheme';

export interface QuizProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Quiz: React.FC<QuizProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(addQuestions([]));
    };
  }, [dispatch]);
  return (
    <Box className={classes.mainContainer}>
      <QuizOptionsModal />
      <QuestionCard />
    </Box>
  );
};

export default Quiz;

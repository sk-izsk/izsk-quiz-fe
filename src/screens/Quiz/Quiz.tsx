import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { QuizOptionsModal } from '../../components';
import { addQuestions } from '../../redux';

export interface QuizProps {}

const Quiz: React.FC<QuizProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(addQuestions([]));
    };
  }, [dispatch]);
  return (
    <Box>
      <QuizOptionsModal />
      <div>hello</div>
    </Box>
  );
};

export default Quiz;

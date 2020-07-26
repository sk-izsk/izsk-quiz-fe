import { Box, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Body1, Button, CardAction, Divider, H6, Radio, RadioGroup } from 'ui-neumorphism';
import { CardContainer } from '..';
import { QuestionList } from '../../redux/questionListSlice';
import { RootState } from '../../redux/store';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { LoadingScreen } from '../Loader/Loader';

export interface QuestionCardProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  mainContainer: {
    textAlign: 'left',
    maxWidth: 400,
    width: '100%',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btn: {
    maxWidth: 100,
    width: '100%',
  },
  timerContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
  },
  question: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
  },
  typeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const QuestionCard: React.FC<QuestionCardProps> = () => {
  const classes = useStyles();
  const [answer, setAnswer] = useState<number | undefined>(undefined);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const questions: QuestionList[] = useSelector<RootState, QuestionList[]>((state: RootState) => state.questions);
  const handleNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
    setAnswer(undefined);
  };

  const handleAnswers = (event: any) => {
    setAnswer(event.value);
  };

  return (
    <>
      {questions.length > 0 ? (
        <Box className={classes.mainContainer}>
          <CardContainer
            cardStyle={classes.mainContainer}
            cardAction={
              <CardAction className={classes.btnContainer}>
                <Button onClick={handleNextQuestion} className={classes.btn} rounded color={theme.palette.primary.main}>
                  Next
                </Button>
              </CardAction>
            }
            inset={true}
          >
            <Box className={classes.typeContainer}>
              <Body1>Category:{questions[questionNumber].category}</Body1>
              <Body1>Type:{questions[questionNumber].type}</Body1>
            </Box>
            <Divider style={{ marginTop: theme.spacing(1) }} />
            <H6 className={classes.question}>
              {questionNumber + 1}:<div dangerouslySetInnerHTML={{ __html: questions[questionNumber].question }} />
            </H6>
            <Divider elevated />
            <RadioGroup vertical value={answer} color={theme.palette.secondary.main} onChange={handleAnswers}>
              {questions[questionNumber].answers.map((answer: string, index: number) => {
                return <Radio key={answer} value={index} label={answer} />;
              })}
            </RadioGroup>
          </CardContainer>
        </Box>
      ) : (
        () => <LoadingScreen />
      )}
    </>
  );
};

export { QuestionCard };

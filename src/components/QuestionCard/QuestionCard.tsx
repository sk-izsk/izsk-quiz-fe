import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Body1, Button, CardAction, Divider, H6, Radio, RadioGroup } from 'ui-neumorphism';
import { CardContainer } from '..';
import { QuestionList, Questions } from '../../redux/questionListSlice';
import { RootState } from '../../redux/store';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { getDifficultyOfQuiz, getTypeOfQuiz } from '../../utils';
import { ErrorCard } from '../ErrorCard/ErrorCard';
import { LoadingScreen } from '../Loader/Loader';
import { QuizResultModal } from '../QuizResultModal/QuizResultModal';

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
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  errorBtn: {
    maxWidth: 200,
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

const QuestionCard: React.FC<QuestionCardProps> = () => {
  const classes = useStyles();
  const [answer, setAnswer] = useState<number | undefined>(undefined);
  const [resultModal, setResultModal] = useState<boolean>(false);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [cardLoading, setCardLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);
  const [correct, setCorrect] = useState<number>(0);
  const questions: Questions = useSelector<RootState, Questions>((state: RootState) => state.questions);
  const handleNextQuestion = () => {
    if (questions.questions !== undefined && questions.questions[questionNumber].indexOfCorrectAnswer === answer) {
      setCorrect(correct + 1);
    }
    if (questions.questions?.length === questionNumber + 1) {
      setDisable(true);
      setCardLoading(true);
      setResultModal(true);
    } else {
      setAnswer(undefined);
      setQuestionNumber(questionNumber + 1);
    }
  };

  useEffect(() => {
    setAnswer(undefined);
  }, [questionNumber]);

  const handleAnswers = (event: any) => {
    setAnswer(event.value);
  };

  const handleCloseResultModal = () => {
    setResultModal(false);
  };

  const pageReload = () => window.location.reload();

  const quizDetails = {
    date: new Date(),
    correctAnswer: correct,
    totalQuestion: questions.questions?.length,
    title: getTypeOfQuiz(questions.questions as QuestionList[]),
    type: getDifficultyOfQuiz(questions.questions as QuestionList[]),
  };

  return (
    <>
      <QuizResultModal onClose={handleCloseResultModal} retry={pageReload} visible={resultModal} {...quizDetails} />
      {questions.questions !== undefined && questions.questions.length > 0 ? (
        <Box className={classes.mainContainer}>
          <CardContainer
            cardStyle={classes.mainContainer}
            cardLoading={cardLoading}
            cardAction={
              <CardAction className={classes.btnContainer}>
                <Button
                  disabled={disable}
                  onClick={handleNextQuestion}
                  className={classes.btn}
                  rounded
                  color={theme.palette.primary.main}
                >
                  Next
                </Button>
              </CardAction>
            }
            inset={true}
          >
            <Box className={classes.typeContainer}>
              <Body1>Category:{questions.questions[questionNumber].category}</Body1>
              <Body1>Type:{questions.questions[questionNumber].type}</Body1>
            </Box>
            <Divider style={{ marginTop: theme.spacing(1) }} />
            <H6 className={classes.question}>
              {questionNumber + 1}:
              <div dangerouslySetInnerHTML={{ __html: questions.questions[questionNumber].question }} />
            </H6>
            <Divider elevated />
            <RadioGroup
              disabled={disable}
              vertical
              value={answer}
              color={theme.palette.secondary.main}
              onChange={handleAnswers}
            >
              {questions.questions[questionNumber].answers.map((answer: string, index: number) => {
                return <Radio key={answer} value={index} label={answer} />;
              })}
            </RadioGroup>
          </CardContainer>
        </Box>
      ) : questions.responseCode === 1 ? (
        <Box className={classes.errorContainer}>
          <ErrorCard />
          <Button rounded bordered color={theme.palette.primary.main} onClick={pageReload} className={classes.errorBtn}>
            Create new quiz
          </Button>
        </Box>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export { QuestionCard };

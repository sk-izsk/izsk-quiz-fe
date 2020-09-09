import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Body1, Button, CardAction, Divider, H6, Radio, RadioGroup } from 'ui-neumorphism';
import { CardContainer } from '..';
import { axiosAuthorization } from '../../api';
import { QuestionList, Questions } from '../../redux/questionListSlice';
import { RootState } from '../../redux/store';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { getDifficultyOfQuiz, getTypeOfQuiz, header } from '../../utils';
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
    justifyContent: 'flex-end',
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
  boldText: {
    fontWeight: 'bold',
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
      setAnswer(undefined);
    } else {
      setAnswer(undefined);
      setQuestionNumber(questionNumber + 1);
    }
  };

  const handleAnswers = (event: any) => {
    setAnswer(event.value);
  };

  const handleCloseResultModal = async () => {
    await sendQuizHistoryData();
    setResultModal(false);
  };

  const pageReload = async () => {
    await sendQuizHistoryData();
    window.location.reload();
  };

  let quizDetails: any;

  if (questions.questions !== undefined && questions.questions.length > 0) {
    quizDetails = {
      date: new Date(),
      correctAnswer: correct,
      totalQuestion: questions.questions?.length,
      title: getTypeOfQuiz(questions.questions as QuestionList[]) as string,
      type: getDifficultyOfQuiz(questions.questions as QuestionList[]) as string,
    };
  }

  const sendQuizHistoryData = async () => {
    try {
      await axiosAuthorization.put('/quiz-history', quizDetails as any, { headers: header });
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <QuizResultModal {...quizDetails} onClose={handleCloseResultModal} retry={pageReload} visible={resultModal} />
      {questions.questions !== undefined && questions.questions.length > 0 ? (
        <Box className={classes.mainContainer}>
          <CardContainer
            cardStyle={classes.mainContainer}
            cardLoading={cardLoading}
            cardAction={
              <CardAction className={classes.btnContainer}>
                <Button
                  disabled={disable || answer === undefined}
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
              <Body1>
                Category: <span className={classes.boldText}>{questions.questions[questionNumber].category}</span>
              </Body1>
              <Body1>
                Type: <span className={classes.boldText}>{questions.questions[questionNumber].type}</span>
              </Body1>
            </Box>
            <Divider style={{ marginTop: theme.spacing(1) }} />
            <H6 className={clsx([classes.question, classes.boldText])}>
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

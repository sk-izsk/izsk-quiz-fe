import { makeStyles } from '@material-ui/core';
import { format } from 'date-fns';
import React from 'react';
import { TiDelete, TiTick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { Button, CardAction, H5, H6, Subtitle2 } from 'ui-neumorphism';
import { DialogContainer } from '..';
import { CustomTheme, theme } from '../../theme/muiTheme';

export interface QuizResultModalProps {
  visible?: boolean;
  onClose?: () => void;
  retry?: () => void;
  title?: string;
  type?: string;
  date?: string | Date;
  totalQuestion?: number;
  correctAnswer?: number;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  modalContainer: {
    maxWidth: 500,
    width: '100%',
    padding: theme.spacing(1),
  },
  dateContainer: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    gridArea: 'date',
  },
  card: {
    padding: theme.spacing(1),
  },
  btnContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  btn: {
    maxWidth: 200,
    width: '100%',
  },
  cardContent: {
    textAlign: 'center',
  },
  failedText: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  passedText: {
    color: theme.palette.success.main,
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  boldText: {
    fontWeight: 'bold',
  },
}));

const QuizResultModal: React.FC<QuizResultModalProps> = ({
  onClose,
  visible,
  correctAnswer,
  date,
  retry,
  title,
  totalQuestion,
  type,
}) => {
  const classes = useStyles();

  const quizResult = (correctAnswer as number) / (totalQuestion as number) >= 0.7 ? 'Passed' : 'Failed';

  return (
    <DialogContainer
      cardContentStyle={classes.cardContent}
      inset={true}
      visible={visible}
      onClose={onClose}
      cardAction={
        <CardAction className={classes.btnContainer}>
          <Link onClick={onClose} className={classes.link} to='/home'>
            <Button className={classes.btn} rounded color={theme.palette.primary.main}>
              Close
            </Button>
          </Link>
          {retry ? (
            <Button onClick={retry} className={classes.btn} rounded color={theme.palette.primary.main}>
              Retry
            </Button>
          ) : (
            <Button onClick={retry} className={classes.btn} rounded color={theme.palette.primary.main}>
              Re-take
            </Button>
          )}
        </CardAction>
      }
    >
      <H5 className={classes.boldText}>{title}</H5>
      <H6>
        Type of quiz: <span className={classes.boldText}>{type}</span>
      </H6>
      {quizResult === 'Passed' ? (
        <TiTick size={100} color={theme.palette.success.main} />
      ) : (
        <TiDelete size={100} color={theme.palette.secondary.main} />
      )}
      <Subtitle2 className={classes.dateContainer} secondary>
        {date && format(date as Date, 'do MMM yyyy')}
      </Subtitle2>
      <H6>
        Question answered correctly:
        <span className={classes.boldText}>
          {correctAnswer}/{totalQuestion}
        </span>
      </H6>
      <H6>
        Result of quiz :
        <span className={quizResult === 'Failed' ? classes.failedText : classes.passedText}> {quizResult}</span>
      </H6>
    </DialogContainer>
  );
};

export { QuizResultModal };

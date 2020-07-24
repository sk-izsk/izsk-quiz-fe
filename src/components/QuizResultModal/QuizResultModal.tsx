import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Button, Card, CardAction, CardContent, Dialog, H5, H6, Subtitle2 } from 'ui-neumorphism';
import { CustomTheme, theme } from '../../theme/muiTheme';

export interface QuizResultModalProps {
  visible?: boolean;
  onClose?: () => void;
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
    // display: 'grid',
    // gridTemplateColumns: '1fr 1fr 1fr',
    // gridTemplateRows: '1fr 1fr',
    textAlign: 'center',
  },
  title: {},
  type: {},
  question: {},
  result: {},
}));

const QuizResultModal: React.FC<QuizResultModalProps> = ({ onClose, visible }) => {
  const classes = useStyles();
  return (
    <Dialog className={classes.modalContainer} visible={visible} onClose={onClose} persistent={true}>
      <Card className={classes.card} inset={true}>
        <CardContent className={classes.cardContent}>
          <H5 className={classes.title}>Quiz Title</H5>
          <H6 className={classes.type}>Type of quiz</H6>
          <Subtitle2 className={classes.dateContainer} secondary>
            date of quiz
          </Subtitle2>
          <H6 className={classes.question}>Question answered correctly : 8/10</H6>
          <H6 className={classes.result}>
            Result of quiz :<span> Passed</span>
          </H6>
        </CardContent>
        <CardAction className={classes.btnContainer}>
          <Button onClick={onClose} className={classes.btn} rounded color={theme.palette.primary.main}>
            Close
          </Button>
          <Button onClick={onClose} className={classes.btn} rounded color={theme.palette.primary.main}>
            Retry
          </Button>
        </CardAction>
      </Card>
    </Dialog>
  );
};

export { QuizResultModal };

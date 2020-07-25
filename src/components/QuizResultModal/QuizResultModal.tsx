import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Button, CardAction, H5, H6, Subtitle2 } from 'ui-neumorphism';
import { DialogContainer } from '..';
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
    textAlign: 'center',
  },
}));

const QuizResultModal: React.FC<QuizResultModalProps> = ({ onClose, visible }) => {
  const classes = useStyles();
  return (
    <DialogContainer
      cardContentStyle={classes.cardContent}
      inset={true}
      visible={visible}
      onClose={onClose}
      cardAction={
        <CardAction className={classes.btnContainer}>
          <Button onClick={onClose} className={classes.btn} rounded color={theme.palette.primary.main}>
            Close
          </Button>
          <Button onClick={onClose} className={classes.btn} rounded color={theme.palette.primary.main}>
            Retry
          </Button>
        </CardAction>
      }
    >
      <H5>Quiz Title</H5>
      <H6>Type of quiz</H6>
      <Subtitle2 className={classes.dateContainer} secondary>
        date of quiz
      </Subtitle2>
      <H6>Question answered correctly : 8/10</H6>
      <H6>
        Result of quiz :<span> Passed</span>
      </H6>
    </DialogContainer>
  );
};

export { QuizResultModal };

import { Box, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Body2, Button, CardAction, H5, Subtitle2 } from 'ui-neumorphism';
import { QuizResultModal } from '..';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { CardContainer } from '../CardContainer/CardContainer';

export interface QuizResultCardProps {
  date?: string | Date;
  correctAnswer?: number;
  totalQuestion?: number;
  title?: string;
  type?: string;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  cardContainer: {
    padding: theme.spacing(1.5),
    maxWidth: 300,
    width: '100%',
    cursor: 'pointer',
  },
  card: {
    padding: theme.spacing(1),
  },
  dateContainer: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
  failedText: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  passedText: {
    color: theme.palette.success.main,
    fontWeight: 'bold',
  },
}));

const QuizResultCard: React.FC<QuizResultCardProps> = ({ date, correctAnswer, totalQuestion, title, type }) => {
  const classes = useStyles();
  const [inset, setInset] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleInset = () => setInset(!inset);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  const quizResult = (correctAnswer as number) / (totalQuestion as number) >= 0.7 ? 'Passed' : 'Failed';
  return (
    <Box className={classes.cardContainer} onMouseOver={handleInset} onMouseOut={handleInset}>
      <QuizResultModal
        visible={openModal}
        onClose={handleCloseModal}
        correctAnswer={correctAnswer}
        // date={date}
        title={title}
        totalQuestion={totalQuestion}
        type={type}
      />
      <CardContainer
        inset={inset}
        cardBordered={true}
        cardAction={
          <CardAction>
            <Button
              onClick={handleOpenModal}
              rounded
              bgColor={theme.palette.primary.main}
              color={theme.palette.success.contrastText}
            >
              More details
            </Button>
          </CardAction>
        }
      >
        <H5>{title}</H5>
        <Subtitle2 className={classes.dateContainer} secondary>
          {date}
        </Subtitle2>
        <Body2>
          Result of quiz
          <br />
          <span className={quizResult === 'Failed' ? classes.failedText : classes.passedText}> {quizResult}</span>
        </Body2>
      </CardContainer>
    </Box>
  );
};

export { QuizResultCard };

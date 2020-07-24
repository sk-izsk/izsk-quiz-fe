import { Box, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Body2, Button, Card, CardAction, CardContent, H5, Subtitle2 } from 'ui-neumorphism';
import { QuizResultModal } from '..';
import { CustomTheme, theme } from '../../theme/muiTheme';

export interface QuizResultCardProps {}

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
}));

const QuizResultCard: React.FC<QuizResultCardProps> = () => {
  const classes = useStyles();
  const [inset, setInset] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleInset = () => setInset(!inset);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
  return (
    <Box className={classes.cardContainer} onMouseOver={handleInset} onMouseOut={handleInset}>
      <QuizResultModal visible={openModal} onClose={handleCloseModal} />
      <Card className={classes.card} bordered inset={inset}>
        <CardContent>
          <H5>Quiz Title</H5>
          <Subtitle2 className={classes.dateContainer} secondary>
            date of quiz
          </Subtitle2>
          <Body2>
            Result of quiz
            <br />
            Passed
          </Body2>
        </CardContent>
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
      </Card>
    </Box>
  );
};

export { QuizResultCard };

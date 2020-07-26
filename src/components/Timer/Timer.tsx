import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { CustomTheme } from '../../theme/muiTheme';

export interface TimerContainerProps {
  remainingTime?: number;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  mainContainer: {
    textAlign: 'center',
  },
}));

const TimerContainer: React.FC<TimerContainerProps> = ({ remainingTime }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box>{remainingTime}</Box>
    </Box>
  );
};

export interface TimerProps {
  duration: number;
  onComplete?: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onComplete }) => {
  return (
    <CountdownCircleTimer
      isPlaying
      size={100}
      strokeWidth={5}
      duration={duration}
      colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']] as any}
      onComplete={onComplete}
    >
      {TimerContainer}
    </CountdownCircleTimer>
  );
};

export { TimerContainer, Timer };

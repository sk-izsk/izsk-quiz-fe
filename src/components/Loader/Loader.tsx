import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ProgressCircular } from 'ui-neumorphism';
import { CustomTheme, theme } from '../../theme/muiTheme';

export interface LoadingScreenProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  loaderContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderContainer}>
      <ProgressCircular indeterminate size={100} width={10} color={theme.palette.primary.main} />
    </div>
  );
};

export { LoadingScreen };

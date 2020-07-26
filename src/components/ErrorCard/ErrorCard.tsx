import { makeStyles } from '@material-ui/core';
import React from 'react';
import { FcCancel } from 'react-icons/fc';
import { H4, H6 } from 'ui-neumorphism';
import { CardContainer } from '..';
import { CustomTheme } from '../../theme/muiTheme';

export interface ErrorCardProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  mainContainer: {
    textAlign: 'center',
  },
}));

const ErrorCard: React.FC<ErrorCardProps> = () => {
  const classes = useStyles();
  return (
    <CardContainer cardStyle={classes.mainContainer} inset={true}>
      <H4>Something goes wrong</H4>
      <FcCancel size={60} />
      <H6>
        We don't get any quiz questions on your selection. <br /> Try to select different options other than what you
        chose
      </H6>
    </CardContainer>
  );
};

export { ErrorCard };

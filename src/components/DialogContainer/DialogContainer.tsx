import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { Dialog } from 'ui-neumorphism';
import { CustomTheme } from '../../theme/muiTheme';
import { CardContainer } from '../CardContainer/CardContainer';

export interface DialogContainerProps {
  visible?: boolean;
  onClose?: () => void;
  dialogStyle?: string;
  inset?: boolean;
  cardContentStyle?: string;
  cardAction?: JSX.Element;
  cardStyle?: string;
  cardLoading?: boolean;
  cardBordered?: boolean;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  modalContainer: {
    maxWidth: 500,
    width: '100%',
    padding: theme.spacing(1),
  },
}));

const DialogContainer: React.FC<DialogContainerProps> = ({
  visible,
  onClose,
  children,
  dialogStyle,
  inset,
  cardContentStyle,
  cardAction,
  cardLoading,
  cardStyle,
  cardBordered,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      className={clsx([classes.modalContainer, dialogStyle && dialogStyle])}
      visible={visible}
      onClose={onClose}
      persistent={true}
    >
      <CardContainer
        cardStyle={cardStyle}
        cardLoading={cardLoading}
        cardContentStyle={cardContentStyle}
        inset={inset}
        cardAction={cardAction}
        cardBordered={cardBordered}
      >
        {children}
      </CardContainer>
    </Dialog>
  );
};

export { DialogContainer };

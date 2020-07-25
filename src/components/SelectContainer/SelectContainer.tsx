import { Box, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';
import { QuizOptions } from '../../utils/quizOptions';

export interface SelectContainerProps {
  label?: string;
  value?: any;
  handleChange?: () => void;
  options: QuizOptions[];
  disable?: boolean;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  selectContainer: {
    backgroundColor: theme.palette.primary.light,
    marginTop: theme.spacing(1),
    width: '100%',
  },
  mainContainer: {
    marginTop: theme.spacing(3),
  },
}));

const SelectContainer: React.FC<SelectContainerProps> = ({ label, value, handleChange, options, disable }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <InputLabel>{label}</InputLabel>
      <Select disabled={disable} className={classes.selectContainer} value={value} onChange={handleChange}>
        {options.map((option: QuizOptions) => {
          return (
            <MenuItem key={option.label} value={option.value as any}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};

export { SelectContainer };

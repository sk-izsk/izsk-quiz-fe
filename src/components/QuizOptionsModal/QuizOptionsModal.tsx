import { InputLabel, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, CardAction, CardContent, Dialog, TextField } from 'ui-neumorphism';
import { Actions } from '../../redux';
import { CustomTheme, theme } from '../../theme/muiTheme';
import {
  questionDifficultyLevel,
  questionType as questionTypeOptions,
  quizCategory,
  quizCategoryOptions,
  useValue,
  useValueForTextField,
} from '../../utils';
import { quizOptionSchema } from '../../validation';
import { SelectContainer } from '../SelectContainer/SelectContainer';

export interface QuizOptionsModalProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  modalContainer: {
    maxWidth: 500,
    width: '100%',
    padding: theme.spacing(1),
  },
  card: {
    padding: theme.spacing(1),
  },
  btnContainer: {
    display: 'grid',
    justifyContent: 'center',
  },
  btn: {
    maxWidth: 200,
    width: '100%',
  },
  cardContent: {
    display: 'grid',
    // gridTemplateColumns: '1fr',
    // gridTemplateRows: '1fr',
  },
  selectContainer: {
    backgroundColor: theme.palette.primary.light,
    marginTop: theme.spacing(1),
  },
  inputContainer: {
    width: '100%',
    margin: 0,
  },
  error: {
    color: theme.palette.secondary.main,
  },
}));

const QuizOptionsModal: React.FC<QuizOptionsModalProps> = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [categoryValue, handleCategoryValue] = useValue(quizCategory.anyCategory);
  const [difficultyLevel, handleDifficultyLevel] = useValue('any');
  const [questionType, handleQuestionType] = useValue('any');
  const [numberOfQuestions, handleNumberOfQuestion] = useValueForTextField(0);
  const dispatch = useDispatch();

  const handleCreateQuiz = async (event: KeyboardEvent) => {
    try {
      event.preventDefault();
      setError('');
      setLoading(true);
      const quizPreference = {
        numberOfQuestions: Number(numberOfQuestions),
        categoryValue: Number(categoryValue) !== 0 ? Number(categoryValue) : null,
        difficultyLevel: difficultyLevel !== 'any' ? difficultyLevel : null,
        questionType: questionType !== 'any' ? questionType : null,
      };

      const validatedQuizPreference = await quizOptionSchema.validate(quizPreference);
      if (validatedQuizPreference !== undefined) {
        dispatch(
          Actions.getQuestion(
            validatedQuizPreference.numberOfQuestions as number,
            validatedQuizPreference.categoryValue as number | null,
            validatedQuizPreference.difficultyLevel as any,
            validatedQuizPreference.questionType as any,
          ),
        );
        setLoading(false);
        setOpen(false);
      }
    } catch (err) {
      if (err.name === 'ValidationError') {
        setError(err.message);
        setLoading(false);
      }
      console.warn(err);
    }
  };

  return (
    <Dialog className={classes.modalContainer} visible={open} onClose={() => {}} persistent={true}>
      <Card className={classes.card} inset={true} loading={loading}>
        <CardContent className={classes.cardContent}>
          <TextField
            className={classes.inputContainer}
            width={400}
            type='number'
            placeholder='Number of Questions(Cannot be more than 50)'
            value={numberOfQuestions}
            onChange={handleNumberOfQuestion}
            disabled={loading}
          />
          {error.length > 0 && <InputLabel className={classes.error}>{error}</InputLabel>}
          <SelectContainer
            options={quizCategoryOptions}
            label='Select Any Category'
            value={categoryValue}
            handleChange={handleCategoryValue}
            disable={loading}
          />
          <SelectContainer
            options={questionDifficultyLevel}
            label='Select Difficulty'
            value={difficultyLevel}
            handleChange={handleDifficultyLevel}
            disable={loading}
          />
          <SelectContainer
            options={questionTypeOptions}
            label='Select Type'
            value={questionType}
            handleChange={handleQuestionType}
            disable={loading}
          />
        </CardContent>
        <CardAction className={classes.btnContainer}>
          <Button
            disabled={loading}
            onClick={handleCreateQuiz}
            className={classes.btn}
            rounded
            color={theme.palette.primary.main}
          >
            Create quiz
          </Button>
        </CardAction>
      </Card>
    </Dialog>
  );
};

export { QuizOptionsModal };

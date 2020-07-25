const quizCategory = {
  anyCategory: 0,
  generalKnowledge: 9,
  entertainmentBooks: 10,
  entertainmentFilm: 11,
  entertainmentMusic: 12,
  entertainmentMusicTheatres: 13,
  entertainmentTelevision: 14,
  entertainmentVideoGames: 15,
  entertainmentBoardGames: 16,
  scienceNature: 17,
  scienceComputer: 18,
  scienceMathematics: 19,
  mythology: 20,
  sports: 21,
  geography: 22,
  history: 23,
  politics: 24,
  arts: 25,
  celebrities: 26,
  animals: 27,
  vehicles: 28,
  entertainmentComics: 29,
  scienceGadget: 30,
  entertainmentJapaneseAnimaManga: 31,
  entertainmentCartoonAnimation: 32,
};

export type Difficulty = null | 'easy' | 'medium' | 'hard';

export type QuestionType = null | 'multiple' | 'boolean';

export interface QuizOptions {
  label: string;
  value: number | Difficulty | QuestionType | string;
}

const quizCategoryOptions: QuizOptions[] = [
  {
    label: 'Any Category',
    value: quizCategory.anyCategory,
  },
  {
    label: 'General Knowledge',
    value: quizCategory.generalKnowledge,
  },
  {
    label: 'Entertainment: Books',
    value: quizCategory.entertainmentBooks,
  },
  {
    label: 'Entertainment: Films',
    value: quizCategory.entertainmentFilm,
  },
  {
    label: 'Entertainment: Music',
    value: quizCategory.entertainmentMusic,
  },
  {
    label: 'Entertainment: Musical & Theatres',
    value: quizCategory.entertainmentMusicTheatres,
  },
  {
    label: 'Entertainment: Television',
    value: quizCategory.entertainmentTelevision,
  },
  {
    label: 'Entertainment: Video Games',
    value: quizCategory.entertainmentVideoGames,
  },
  {
    label: 'Entertainment: Board Games',
    value: quizCategory.entertainmentBoardGames,
  },
  {
    label: 'Science & Nature',
    value: quizCategory.scienceNature,
  },
  {
    label: 'Science: Computers',
    value: quizCategory.scienceComputer,
  },
  {
    label: 'Science: Mathematics',
    value: quizCategory.scienceMathematics,
  },
  {
    label: 'Mythology',
    value: quizCategory.mythology,
  },
  {
    label: 'Sport',
    value: quizCategory.sports,
  },
  {
    label: 'Geography',
    value: quizCategory.geography,
  },
  {
    label: 'History',
    value: quizCategory.history,
  },
  {
    label: 'Politics',
    value: quizCategory.politics,
  },
  {
    label: 'Art',
    value: quizCategory.arts,
  },
  {
    label: 'Celebrities',
    value: quizCategory.celebrities,
  },
  {
    label: 'Vehicles',
    value: quizCategory.vehicles,
  },
  {
    label: 'Entertainment: Comics',
    value: quizCategory.entertainmentComics,
  },
  {
    label: 'Science: Gadgets',
    value: quizCategory.scienceGadget,
  },
  {
    label: 'Entertainment: Japanese Anime & Manga',
    value: quizCategory.entertainmentJapaneseAnimaManga,
  },
  {
    label: 'Entertainment: Cartoon & Animations',
    value: quizCategory.entertainmentCartoonAnimation,
  },
];

const questionDifficultyLevel: QuizOptions[] = [
  {
    label: 'Any Difficulty',
    value: 'any',
  },
  {
    label: 'Easy',
    value: 'easy',
  },
  {
    label: 'Medium',
    value: 'medium',
  },
  {
    label: 'Hard',
    value: 'hard',
  },
];

const questionType: QuizOptions[] = [
  {
    label: 'Any Type',
    value: 'any',
  },
  {
    label: 'Multiple Choice',
    value: 'multiple',
  },
  {
    label: 'True / False',
    value: 'boolean',
  },
];

export { quizCategory, quizCategoryOptions, questionDifficultyLevel, questionType };

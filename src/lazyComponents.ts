import { lazy } from 'react';

const HomeScreen = lazy(() => import('./screens/Home/Home'));
const AboutScreen = lazy(() => import('./screens/About/About'));
const QuizScreen = lazy(() => import('./screens/Quiz/Quiz'));

export { HomeScreen, AboutScreen, QuizScreen };

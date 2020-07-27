import { lazy } from 'react';

const HomeScreen = lazy(() => import('./screens/Home/Home'));
const AboutScreen = lazy(() => import('./screens/About/About'));
const QuizScreen = lazy(() => import('./screens/Quiz/Quiz'));
const SignUpScreen = lazy(() => import('./screens/SignUp/SignUp'));
const LoginScreen = lazy(() => import('./screens/Login/Login'));

export { HomeScreen, AboutScreen, QuizScreen, SignUpScreen, LoginScreen };

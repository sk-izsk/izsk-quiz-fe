import { lazy } from 'react';

const HomeScreen = lazy(() => import('./screens/Home/Home'));
const AboutScreen = lazy(() => import('./screens/About/About'));

export { HomeScreen, AboutScreen };

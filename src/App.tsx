import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import 'ui-neumorphism/dist/index.css';
import { AppProvider } from './AppProvider';
import { LoadingScreen, NavBar } from './components';
import { AboutScreen, HomeScreen, LoginScreen, QuizScreen, SignUpScreen } from './lazyComponents';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavBar />
      <Switch>
        <Suspense fallback={<LoadingScreen />}>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact component={HomeScreen} />
          <Route path='/about' exact component={AboutScreen} />
          <Route path='/quiz' exact component={QuizScreen} />
          <Route path='/sign-up' exact component={SignUpScreen} />
          <Route path='/login' exact component={LoginScreen} />
        </Suspense>
      </Switch>
    </AppProvider>
  );
};

export default App;

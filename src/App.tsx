import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import 'ui-neumorphism/dist/index.css';
import { AppProvider } from './AppProvider';
import { LoadingScreen, NavBar } from './components';
import { AboutScreen, HomeScreen, LoginScreen, QuizScreen, SignUpScreen } from './lazyComponents';
import { Account } from './redux/accountSlice';
import { RootState } from './redux/store';

const RouterApp = () => {
  const userDetails: Account = useSelector<RootState, Account>((state: RootState) => state.account);

  useEffect(() => {
    console.log('tick');
  }, [userDetails.isLoggedIn]);

  return (
    <Switch>
      <Suspense fallback={<LoadingScreen />}>
        <Route exact path='/'>
          <Redirect to={userDetails.isLoggedIn ? '/quiz' : '/login'} />
        </Route>
        <Route path='/home' exact component={userDetails.isLoggedIn ? HomeScreen : LoginScreen} />
        <Route path='/quiz' exact component={userDetails.isLoggedIn ? QuizScreen : LoginScreen} />
        <Route path='/sign-up' exact component={userDetails.isLoggedIn ? QuizScreen : SignUpScreen} />
        <Route path='/login' exact component={userDetails.isLoggedIn ? QuizScreen : LoginScreen} />
        <Route path='/about' exact component={AboutScreen} />
      </Suspense>
    </Switch>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavBar />
      <RouterApp />
    </AppProvider>
  );
};

export default App;

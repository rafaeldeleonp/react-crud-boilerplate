import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Home from '../Home';
import Login from '../Login';
import Maintenance from '../Maintenance';
import './style.scss';

const Main = () => {
  const { pathname } = window.location;
  const isLogin = Boolean(pathname === '/login');

  return (
    <ErrorBoundary>
      {!isLogin && <Header />}
      <Body>
        <Switch>
          <Route key="home" exact path="/" component={Home} />
          <Route key="login" path="/login" component={Login} />
          <Route key="maintenance" path="/maintenance" component={Maintenance} />
        </Switch>
      </Body>
      {!isLogin && <Footer />}
    </ErrorBoundary>
  );
};

export default Main;


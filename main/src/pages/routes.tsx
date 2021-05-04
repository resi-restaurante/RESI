import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ForgotPassword from './ForgotPassword';
import Home from './Home';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

export function Routes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="transition" timeout={500}>
        <Switch location={location}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

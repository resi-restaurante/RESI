import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

export function Routes() {
  return (
    <Router>
      <Switch>
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
    </Router>
  );
}

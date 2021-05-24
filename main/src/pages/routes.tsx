import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ForgotPassword from './ForgotPassword';
import Home from './Home';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import RestaurantsListing from './Restaurants';
import ContactPage from './Contact';
import DetailRestaurant from './DetailRestaurant';

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
          <Route path="/restaurants">
            <RestaurantsListing />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/detailsrestaurants">
            <DetailRestaurant />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

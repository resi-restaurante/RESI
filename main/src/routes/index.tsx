import { Switch, useLocation, Route } from 'react-router-dom';
import PrivateRoute from './Routes';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RestaurantsListing from '../pages/Restaurants';
import ContactPage from '../pages/Contact';
import DetailRestaurant from '../pages/DetailRestaurant';
import ProfilePage from '../pages/Profile';

export function Routes() {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/restaurants" component={RestaurantsListing} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/detailsrestaurants" component={DetailRestaurant} />
      <PrivateRoute path="/profile" component={ProfilePage} />
    </Switch>
  );
}

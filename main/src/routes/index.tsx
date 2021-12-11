import { Switch, useLocation, Route } from 'react-router-dom';

import PrivateRoute from './Routes';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RestaurantsListing from '../pages/Restaurants';
import ContactPage from '../pages/Contact';

import ProfilePage from '../pages/Profile';
import CompanyPage from '../pages/Company';
import PaymentPage from '../pages/Payment';

import ConfirmedTable from '../pages/ConfirmedTable';
import RegisterRestaurant from '../pages/RegisterRestaurant';
import DetailRestaurant from '../pages/DetailRestaurant';
import RegisterUsers from '../pages/RegisterUsers';

export function Routes() {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path="/confirmed" component={ConfirmedTable} />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterUsers} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/dataset" component={RegisterPage} />
      <Route path="/restaurants" component={RestaurantsListing} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/detailsrestaurants/:id" component={DetailRestaurant} />
      <Route path="/payment" component={PaymentPage} />
      <PrivateRoute path="/profile" component={ProfilePage} />
      <PrivateRoute path="/mycompany/:id" component={CompanyPage} />
      <Route path="/registerrestaurant" component={RegisterRestaurant} />
    </Switch>
  );
}

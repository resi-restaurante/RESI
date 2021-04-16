import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './Home';
import LoginPage from './LoginPage';

function Routes() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;
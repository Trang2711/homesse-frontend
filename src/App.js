import HomePage from './page/home_page/home';
import LoginPage from './page/login_page/login';
import RegisterPage from './page/register_page/register';
import SearchPage from './page/search_page/search';
import PersonalPage from './page/personal_page/personal';
import AdminPage from './page/admin_page/admin_page';
import NotFound from './components/not_found/not_found';
import BoardingPage from './page/boarding_page/boarding_page';
import './App.scss';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}>
        </Route>
        <Route path="/login" component={LoginPage}>
        </Route>
        <Route path="/register" component={RegisterPage}>
        </Route>
        <Route path="/search" component={SearchPage}>
        </Route>
        <Route path="/personal" component={PersonalPage}>
        </Route>
        <Route path="/admin" component={AdminPage}>
        </Route>
        <Route path="/boarding/:id" component={BoardingPage}>
        </Route>
        <Router component={NotFound}></Router>
      </Switch>
    </Router>
  );
}

export default App;

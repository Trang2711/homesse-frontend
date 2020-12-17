import HomePage from './components/home_page/home';
import LoginPage from './components/login_page/login';
import RegisterPage from './components/register_page/register';
import SearchPage from './components/search_page/search';
import Title from './components/posts_detail/title/title';
import InfoAuthor from './components/posts_detail/info_author/info_author'

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
        </Switch>
    </Router>
  );
}

export default App;

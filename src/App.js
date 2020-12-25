import HomePage from './page/home_page/home';
import LoginPage from './page/login_page/login';
import RegisterPage from './page/register_page/register';
import SearchPage from './page/search_page/search';
import PersonalPage from './page/personal_page/personal';
import AdminPage from './page/admin_page/admin_page';
import './App.scss';

import Title from './components/posts_detail/title/title';
import InfoAuthor from './components/posts_detail/info_author/info_author';
import DescriptionDetail from './components/posts_detail/description_detail/desc_detail';
import Facility from './components/posts_detail/facilities/facilities';
import DescriptionExtra from './components/posts_detail/description_extra/description_extra';
import Image from './components/posts_detail/image/image';
import Comment from './components/posts_detail/comment/comment';
import PostDetail from './components/posts_detail/post_detail'

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
        </Switch>
    </Router>
  );
}

export default App;

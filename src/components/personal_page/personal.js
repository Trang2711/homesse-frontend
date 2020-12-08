import './personal.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from 'react';

import MenuLogin from '../navigation/menu_login';
import Footer from '../footer/footer';
import LeftNav from './personal_navigation/left_nav';

import InfoPersonal from './info_personal/info_personal';
import SavedPost from './saved_post/saved_post';
import LikedPost from './liked_post/liked_post';
import CommentedPost from './commented_post.js/commented_post';
import ReportedPost from './reported_post/reported_post';

class PersonalPage extends Component {
    render() {
        return (
            <Router>
                <div className="personal-page">
                    <MenuLogin userName="Trang Trịnh"/>
                    <div className="buffer"></div>
                    <div className="personal-page__container">
                        <LeftNav />
                        <div className="personal-page__content">
                            <Switch>
                                <Route path="/personal/info">
                                    <InfoPersonal />
                                </Route>
                                <Route path="/personal/saved-post">
                                    <SavedPost />
                                </Route>
                                <Route path="/personal/history/liked-post">
                                    <LikedPost />
                                </Route>
                                <Route path="/personal/history/post-commented">
                                    <CommentedPost />
                                </Route>
                                <Route path="/personal/history/post-reported">
                                    <ReportedPost />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default PersonalPage;
import './personal.scss';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import MenuLogin from '../../components/navigation/menu_login';
import Footer from '../../components/footer/footer';
import LeftNav from './personal_navigation/left_nav';

import InfoPersonal from '../../components/info_personal/info_personal';
import SavedPost from './saved_post/saved_post';
import LikedPost from './liked_post/liked_post';
import CommentedPost from './commented_post.js/commented_post';
import ReportedPost from './reported_post/reported_post';
import EditInfoModal from '../../components/modal/edit_info';


function PersonalPage() {

    // const userName = useSelector(state => state.user.lastName);
    // const userId = useSelector(state => state.user.id)
    // console.log(userId, userName);
    

    

    let { path, url} = useRouteMatch();
    console.log(path, url);
    return (
        <Router>
            <div className="personal-page">
                <MenuLogin/>
                <div className="buffer"></div>
                <div className="personal-page__container">
                    <LeftNav url={url}/>
                    <div className="personal-page__content">
                        <Switch>
                            <Route exact path={path}>
                                <InfoPersonal/>
                            </Route>
                            <Route path={`${path}/saved-post`}>
                                <SavedPost />
                            </Route>
                            <Route path={`${path}/history/liked-post`}>
                                <LikedPost />
                            </Route>
                            <Route path={`${path}/history/post-commented`}>
                                <CommentedPost />
                            </Route>
                            <Route path={`${path}/history/post-reported`}>
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

export default PersonalPage;
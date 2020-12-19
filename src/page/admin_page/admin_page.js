import './admin_page.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from 'react';

import MenuLogin from '../../components/navigation/menu_login';
import Footer from '../../components/footer/footer';
import ListPost from './list_post/list_post';
import PostReport from './post_report/post_report';
import TimeReport from './time_report/time_report';
import PositionReport from './position_report/positon_report';
import Customer from './customer/customer';
import LeftNav from './admin_navigation/left_nav';

class PersonalPage extends Component {
    render() {
        return (
            <Router>
                <div className="admin-page">
                    <MenuLogin userName="Trang Trịnh"/>
                    <div className="buffer"></div>
                    <div className="admin-page__container">
                        <LeftNav />
                        <div className="admin-page__content">
                            <Switch>
                                <Route path="/admin/list-post">
                                    <ListPost/>
                                </Route>
                                <Route path="/admin/report/post">
                                    <PostReport />
                                </Route>
                                <Route path="/admin/report/time">
                                    <TimeReport />
                                </Route>
                                <Route path="/admin/report/position">
                                    <PositionReport />
                                </Route>
                                <Route path="/admin/customer">
                                    <Customer />
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
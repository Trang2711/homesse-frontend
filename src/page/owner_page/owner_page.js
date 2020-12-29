import './owner_page.scss';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import userApi from '../../api/userApi';
import postApi from '../../api/postApi';

import MenuLogin from '../../components/navigation/menu_login';
import Footer from '../../components/footer/footer';
import LeftNav from './owner_navigation/left_nav';

import AcceptPost from './accept_post/accept_post';
import UnacceptPost from './unaccept_post/unaccept_post';
import InfoPersonal from '../../components/info_personal/info_personal';
import CreatePost from './create_post/create_post';


function OwnerPage() {

    // const userName = useSelector(state => state.user.name);
    const userId = localStorage.getItem("id");
    let { path, url } = useRouteMatch();
    console.log(path, url);

    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function fetchInfo() {
            try {
                const res = await userApi.getUser(userId);
                console.log(res);
                setInfo(res);
            } catch (error) {
                console.log("Error when fetching userInfo: " + error);
            }
        }
        fetchInfo();
    }, []);

    async function handleSubmitCreatePost(form) {
        /**
         * to do something
         */
        
        const res = await postApi.createPost(form);
        //check res and handle mess
    }

    return (
        <Router>
            <div className="personal-page">
                <MenuLogin/>
                <div className="buffer"></div>
                <div className="personal-page__container">
                    <LeftNav />
                    <div className="personal-page__content">
                        <Switch>
                            <Route path="/owner/info">
                                <InfoPersonal userInfo={info} />
                            </Route>
                            <Route path="/owner/add-post">
                                <CreatePost onSubmit={handleSubmitCreatePost} />
                            </Route>
                            <Route path="/owner/accept-post">
                                <AcceptPost/>
                            </Route>
                            <Route path="/owner/unaccept-post">
                                <UnacceptPost/>
                            </Route>
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default OwnerPage;
import './owner_page.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import userApi from '../../api/userApi';
import postApi from '../../api/postApi';
import queryString from "query-string";

import MenuLogin from '../../components/navigation/menu_login';
import Footer from '../../components/footer/footer';
import LeftNav from './owner_navigation/left_nav';

import AcceptPost from './accept_post/accept_post';
import UnacceptPost from './unaccept_post/unaccept_post';
// import EditInfoModal from '../../components/modal/edit_info';
import InfoPersonal from '../../components/info_personal/info_personal';
import CreatePost from './create_post/create_post';


function OwnerPage() {

    const userName = useSelector(state => state.user.name);
    const userId = useSelector(state => state.user.id)
    // console.log(userId, userName);

    const [info, setInfo] = useState([]);
    const [acceptPosts, setAcceptPost] = useState([]);
    const [unAcceptPosts, setUnacceptPost] = useState([]);

    useEffect(() => {
        async function fetchInfo(id) {
            try {
                const res = await userApi.getUser(id);
                // console.log(res);
                setInfo(res);
            } catch (error) {
                console.log("Error when fetching userInfo: " + error);
            }
        }
        fetchInfo(userId);
    }, []);

    useEffect(() => {
        async function fetchPosts(id) {
            try {
                const params = {user_id: id};
                const res = await postApi.getPosts(params);
                // console.log(res);
                
                const acceptPosts = res.reduce((arr, post) => {
                    // console.log(arr);
                    if(post.status_review === "1"){
                        arr.push(post);
                    } 
                    return arr;
                }, []);

                const unAcceptPosts = res.reduce((arr, post) => {
                    // console.log(arr);
                    if(post.status_review === "0"){
                        arr.push(post);
                    } 
                    return arr;
                }, []);

                setAcceptPost(acceptPosts);
                setUnacceptPost(unAcceptPosts);
            } catch (error) {
                console.log("Error when fetching userInfo: " + error);
            }
        }
        fetchPosts(userId);
    }, []);

    function handleSubmitCreatePost(form) {
        /**
         * to do something
         */
    }

    return (
        <Router>
            <div className="personal-page">
                <MenuLogin userName="Trang Trịnh" />
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
                                <AcceptPost posts={acceptPosts}/>
                            </Route>
                            <Route path="/owner/unaccept-post">
                                <UnacceptPost posts={unAcceptPosts}/>
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
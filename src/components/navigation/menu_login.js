import './menu.scss';
import logo from '../../images/logo_0.png';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import userApi from '../../api/userApi';
import notificationApi from '../../api/notificationApi';
import Notification from '../../components/notification/notification';
// import store from '../../store';
// import { useSelector } from 'react-redux';

function MenuLogin() {
    const userId = localStorage.getItem("id");
    const userName = localStorage.getItem("lastName");
    const role = localStorage.getItem("role");

    const [closeMenu, setCloseMenu] = useState(true);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        async function fetchNotifications(){
            const res = await notificationApi.getNotification(userId);
            console.log(res);
            setNotifications(res);
        }

        fetchNotifications();
    }, [notifications]);

    function handleClick() {
        setCloseMenu(!closeMenu);
    }

    async function logOut() {
        const res = await userApi.signOut();
        if(res.message === "Successfully logged out"){
            localStorage.removeItem("token");
        }
    }

    function setUrl() {
        if(role === "owner") {
            return'/owner';
        } else if (role === "admin") {
            return'/admin';
        } else {
            return'/personal';
        }
    }

    function handleClickNotification(postId, userId) {
        console.log(postId + " " + userId);
    }
    return (
        <div className="navbar">
            <div className="navbar__top"></div>
            <div className="navbar__container">
                <img className="navbar-logo" src={logo} alt=""></img>
                <ul className={closeMenu ? 'navbar-menu' : 'navbar-menu reverse'}>
                    <Link to="/"><li>Trang chủ</li></Link>
                    <a href="#aboutUs"><li>Chúng tôi</li></a>
                    <a href="#contactUs"><li>Liên lạc</li></a>
                    <Link to="/search"><li>Tìm kiếm</li></Link>
                    <li className="drop">
                        <i className="fal fa-bell"></i>
                        <ul className="drop-down notify-drop">
                            {
                                notifications.map(notification => (
                                    <Notification 
                                        userId={notification.userId} 
                                        postId={notification.postId} 
                                        title={notification.title}
                                        onClick={()=>handleClickNotification(notification.userId, notification.postId)}
                                        />
                                    ))
                            }
                        </ul>
                    </li>
                    <li className="drop">
                        <i className="fal fa-user"></i>
                        <span>
                            {userName}
                        </span>
                        <ul className="drop-down user-drop">
                            <Link to={setUrl()}><li>Trang cá nhân</li></Link>
                            <Link to="/" onClick={logOut}><li>Đăng xuất</li></Link>
                        </ul>
                    </li>
                </ul>
                <div className="bars" onClick={handleClick}><i className={closeMenu ? 'fas fa-bars' : 'fas fa-times'}></i></div>
            </div>
        </div>

    )
}

export default MenuLogin;
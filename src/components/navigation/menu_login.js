import './menu.scss';
import logo from '../../images/logo_0.png';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import notificationApi from '../../api/notificationApi';
// import store from '../../store';
import { useSelector } from 'react-redux';

function MenuLogin() {
    const user = useSelector(state => state.user);
    console.log(user);
    const [closeMenu, setCloseMenu] = useState(true);
    const [notifications, setnotifications] = useState([]);
    if(user){
        console.log(user.lastName);
    } else {
        console.log("user null");
    }

    useEffect(() => {
        async function fetchNotification(userId) {
            const notifications = await notificationApi.getNotification({ user_id: userId });
            console.log(notifications);
            setnotifications(notifications);
        }

        fetchNotification()
    }, [])

    function handleClick() {
        setCloseMenu(!closeMenu);
    }

    function logOut() {
        localStorage.removeItem("token");
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
                                // notifications.map(post => (<Link to={"/posts/" + post.id}><li>Bài đăng "<b>{post.title}</b>"{post.status_review === "0" ? "dã được duyệt" : "đã bị từ chối duyệt"} </li></Link>))
                            }
                            <Link to=""><li>Bài đăng "<b>Nhà trọ giá rẻ full đôg gần đại học Công Nghệ...</b>" đã được duyệt</li></Link>
                            <Link to=""><li>Bài đăng "<b>Nhà trọ giá rẻ full đôg gần đại học Công Nghệ...</b>" đã bị từ chối duyệt</li></Link>
                        </ul>
                    </li>
                    <li className="drop">
                        <i className="fal fa-user"></i>
                        <span>
                            {user&&user.lastName}
                        </span>
                        <ul className="drop-down user-drop">
                            <Link to={(user&&user.role === 'owner') ? '/owner' : '/personal'}><li>Trang cá nhân</li></Link>
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
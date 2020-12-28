import './menu.scss';
import logo from '../../images/logo_0.png';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Menu () {

    const [closeMenu, setCloseMenu] = useState(true);

    function handleClick() {
        setCloseMenu(!closeMenu);
    }

    return (
        <div className="navbar">
            <div className="navbar__top"></div>
            <div className="navbar__container">
                <img className="navbar-logo" src={logo} alt=""></img>
                <ul className={closeMenu ? 'navbar-menu' : 'navbar-menu reverse'}>
                    <Link to="/"><li>Trang chủ</li></Link>
                    {/* <Link to="#aboutUs"><li>Chúng tôi</li></Link> */}
                    <a href="#aboutUs"><li>Chúng tôi</li></a>
                    <a href="#contactUs"><li>Liên lạc</li></a>
                    <Link to="/search"><li>Tìm kiếm</li></Link>
                    <Link to="/register"><li>Đăng kí</li></Link>
                    <Link to="/login"><li>Đăng nhập</li></Link>
                </ul>
                <div className="bars" onClick={handleClick}><i className={closeMenu ? 'fas fa-bars' : 'fas fa-times'}></i></div>
            </div>
        </div>
    )
}

export default Menu;
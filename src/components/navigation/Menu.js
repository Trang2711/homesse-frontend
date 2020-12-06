import './menu.scss';
import logo from '../../images/logo_0.png';
import { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
                <div className="navbar">
                    <div className="navbar__top"></div>
                    <div className="navbar__container">
                        <img className="navbar-logo" src={logo} alt=""></img>
                        <ul className="navbar-nav">
                            <li><Link to="/">Trang chủ</Link></li>
                            <li><a href="#aboutUs">Chúng tôi</a></li>
                            <li><a href="#contactUs">Liên lạc</a></li>
                            <li><Link to="/search">Tìm kiếm</Link></li>
                            <li><Link to="/register">Đăng kí</Link></li>
                            <li><Link to="/login">Đăng nhập</Link></li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default Menu;
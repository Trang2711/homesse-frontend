import './menu.scss';
import logo from '../../images/logo_0.png';
import { Component } from 'react';
import { Link } from "react-router-dom";

class MenuLogin extends Component {
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
                            <li><i className="fal fa-bell"></i></li>
                            <li className="drop">
                                <i className="fal fa-user"></i>
                                <span>
                                {this.props.userName}</span>
                                <ul className="drop-down">
                                    <li><Link to="/personal-page">Trang cá nhân</Link></li>
                                    <li><Link to="/">Đăng xuất</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default MenuLogin;
import './menu.scss';
import logo from '../../images/logo_0.png';
import { Component } from 'react';
// import { BrowerRouter as Router, Route, Link } from 'react-router-dom';
// import { Router, Route, Switch } from "react-router-dom";

class Menu extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            // <Router>
                <div className="navbar">
                    <div className="navbar__top"></div>
                    <div className="navbar__container">
                        <img className="navbar-logo" src={logo} alt=""></img>
                        <ul className="navbar-nav">
                            <li>Trang chủ</li>
                            <li>Chúng tôi</li>
                            <li>Liên lạc</li>
                            <li>Tìm kiếm</li>
                            <li>Đăng kí</li>
                            <li>Đăng nhập</li>
                        </ul>
                    </div>
                </div>
            // </Router>
        )
    }
}

export default Menu;
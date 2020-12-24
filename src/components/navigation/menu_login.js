import './menu.scss';
import logo from '../../images/logo_0.png';
import { Component } from 'react';
import { Link } from "react-router-dom";

class MenuLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closeMenu: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            closeMenu: !state.closeMenu
        }));
        console.log('close');
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar__top"></div>
                <div className="navbar__container">
                    <img className="navbar-logo" src={logo} alt=""></img>
                    <ul className={this.state.closeMenu ? 'navbar-menu' : 'navbar-menu reverse'}>
                        <Link to="/"><li>Trang chủ</li></Link>
                        <a href="#aboutUs"><li>Chúng tôi</li></a>
                        <a href="#contactUs"><li>Liên lạc</li></a>
                        <Link to="/search"><li>Tìm kiếm</li></Link>
                        <li><i className="fal fa-bell"></i></li>
                        <li className="drop">
                            <i className="fal fa-user"></i>
                            <span>
                                {this.props.userName}</span>
                            <ul className="drop-down">
                                <Link to="/personal"><li>Trang cá nhân</li></Link>
                                <Link to="/"><li>Đăng xuất</li></Link>
                            </ul>
                        </li>
                    </ul>
                    <div className="bars" onClick={this.handleClick}><i className={this.state.closeMenu ? 'fas fa-bars' : 'fas fa-times'}></i></div>
                </div>
            </div>

        )
    }
}

export default MenuLogin;
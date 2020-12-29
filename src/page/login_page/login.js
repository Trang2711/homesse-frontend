import './login.scss';
import { useEffect, useState } from 'react';
import emailIcon from '../../images/email.png'
import pass from '../../images/padlock.png'
import warn from '../../images/exclamation-mark.png'
import { Redirect, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import userApi from '../../api/userApi';
import { useDispatch } from 'react-redux';
import { initUser } from '../../action/user_action';
import store from '../../store';

function Login() {

    const [LoggedIn, setLoggedIn] = useState(true);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [warningEmail, setwarningEmail] = useState(false);
    const [warningPassword, setwarningPassword] = useState(false);
    
    const dispatch = useDispatch();

    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem("token");
        let _loggedIn = (token === null) ? false : true;
        if (_loggedIn) return history.push("/");
        setLoggedIn(_loggedIn);
    }, [LoggedIn]);

    function onHandleChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        if (name === 'email') {
            setemail(value);
        } else {
            setpassword(value);
        }
    }
    async function onHandleSubmit(event) {
        event.preventDefault();
        const validation = validationForm();
        if (validation) {
            const data = {
                email: email,
                password: password
            };
            const res = await userApi.signIn(data);
            console.log(res);

            if (res.message === "Đăng nhập thành công") {
                localStorage.setItem("token", res.token_type + res.access_token);
                let newUser = initUser(res);
                dispatch(newUser);
                console.log(store.state);
                setLoggedIn(true);

                if (LoggedIn) return history.push("/");
            }
        }
    }
    function validationForm() {
        if (checkEmail() === false) return false;
        if (checkPassword() === false) return false;
        return true;
    }

    function checkEmail() {
        const regexEmail = /\S+@\S+\.\S+/;
        console.log(email);
        if (!regexEmail.test(email) && email.length === 0) {
            document.getElementById("login__error").innerText = "Email hoặc mật khẩu không đúng!";
            setwarningEmail(true);
            return false;
        } else {
            document.getElementById("login__error").innerText = "";
            setwarningEmail(false);
            return true;
        }
    }

    function checkPassword() {
        console.log(password);
        const regexPass = /^.{6,}$/;
        if (!regexPass.test(password)) {
            document.getElementById("login__error").innerText = "Email hoặc mật khẩu không đúng!";
            setwarningPassword(true);
            return false;
        } else {
            document.getElementById("login__error").innerText = "";
            setwarningPassword(false);
            return true;
        }
    }
    return (
        <div className="login__container">
            <div className="login__inner">
                <div className="login__title">
                    <h1 className="login__title__main">HOMESSE</h1>
                    <h2 className="login__title__extra">FIND YOUR HOME</h2>
                </div>
                <form className="form-login" onSubmit={onHandleSubmit}>
                    <div className="inputLogin">
                        <input
                            type="email"
                            className="login__input"
                            placeholder="Email"
                            name="email"
                            onChange={onHandleChange}
                            value={email}
                        />
                        <img src={emailIcon} className="icon-email" alt="" />
                        {
                            warningEmail ?
                                <img src={warn} className="warning__login" alt="" />
                                : null
                        }
                    </div>

                    <div className="inputLogin">
                        <input
                            type="password"
                            className="login__input"
                            placeholder="Password"
                            name="password"
                            onChange={onHandleChange}
                            value={password}
                        />
                        <img src={pass} className="icon-pass" alt="" />
                        {
                            warningPassword ?
                                <img src={warn} className="warning__login" alt="" />
                                : null
                        }
                    </div>

                    <div>
                        <p id="login__error"></p>
                    </div>
                    <div className="register">
                        <Link to="/register">Don't you have an account? Sign Up</Link>
                    </div>
                    <div className="login__btn">
                        <button type="submit" className="login__button">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;
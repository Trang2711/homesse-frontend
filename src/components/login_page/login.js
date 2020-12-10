import './login.scss';
import { Component } from 'react';
import email from '../../images/email.png'
import pass from '../../images/padlock.png'
import warn from '../../images/exclamation-mark.png'
class Login extends Component {
    render() {
        return(
            <div className="main">
                <div className="login">
                    <div className="nameWeb">
                        <h1>HOMESSE</h1>
                        <h2>FIND YOUR HOME</h2>
                    </div>
                    <form className="form-login">
                        <div className="inputLogin">
                            <input type="email" id="inputEmail" placeholder="Email"></input>
                            <img src={email} className="icon-email"/>                            
                            <img src={warn} className="icon-warn1" alt=""/>
                        </div>
                        <div className="inputLogin">
                            <input type="password" id="inputPass" placeholder="Password"/>
                            <img src={pass} className="icon-pass"/>
                            <img src={warn} className="icon-warn2" alt=""/>
                        </div>
                        <div>
                            <span id="info-error">hihihi</span>
                        </div>
                        <div className="register">
                            <a href="">Don't you have an account? Sign Up</a>
                        </div>
                        <div className="btn">
                            <button type="button" id="btn-login">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
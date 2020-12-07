import './login.scss';
import { Component } from 'react';

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
                        <div>
                            <input type="email" id="inputEmail" className="inputLogin" placeholder="Email"/>
                        </div>
                        <div>
                            <input type="password" id="inputPass" className="inputLogin" placeholder="Password"/>
                        </div>
                        <div>
                            <label id="info-error"></label>
                        </div>
                        <div className="register">
                            <a href="">Don't you have an account?</a>
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
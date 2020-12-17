import './login.scss';
import { Component } from 'react';
import email from '../../images/email.png'
import pass from '../../images/padlock.png'
import warn from '../../images/exclamation-mark.png'
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            txtEmail : '',
            txtPassword : '',
            warningEmail: false,
            warningPassword: false
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    onHandleChange(event){
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }
    onHandleSubmit(event){
        event.preventDefault();
        const validation = this.validationForm();
        if(validation){
            console.log(this.state);
        }
    }
    validationForm(){
        if(this.checkEmail() === false) return false;
        if(this.checkPassword() === false) return false;
        return true;
    }

    checkEmail(){
        const {txtEmail} = this.state;
        const regexEmail = /\S+@\S+\.\S+/;
        if (!regexEmail.test(txtEmail) && txtEmail.length === 0) {
            document.getElementById("login__error").innerText = "Email hoặc mật khẩu không đúng!";
            this.setState({
                warningEmail: true
            })
            return false;
        }else{
            document.getElementById("login__error").innerText = "";
            this.setState({
                warningEmail: false
            })
            return true;
        }
    }

    checkPassword(){
        const {txtPassword} = this.state;
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(!regexPass.test(txtPassword)){
            document.getElementById("login__error").innerText = "Email hoặc mật khẩu không đúng!";
            this.setState({
                warningPassword: true
            })
            return false;
        }else{
            document.getElementById("login__error").innerText = "";
            this.setState({
                warningPassword: false
            })
            return true;
        }
    }
    render() {
        return(
            <div className="login__container">
                <div className="login__inner">
                    <div className="login__title">
                        <h1 className="login__title__main">HOMESSE</h1>
                        <h2 className="login__title__extra">FIND YOUR HOME</h2>
                    </div>
                    <form className="form-login" onSubmit={this.onHandleSubmit}>
                        <div className="inputLogin">
                            <input 
                                type="email" 
                                className="login__input" 
                                placeholder="Email"
                                name="txtEmail"
                                onChange={ this.onHandleChange}
                                value={this.state.txtEmail}
                            />
                            <img src={email} className="icon-email"/>
                            {
                                this.state.warningEmail?
                                <img src={warn} className="warning__login" alt=""/>
                                :null
                            }                                                              
                        </div>

                        <div className="inputLogin">
                            <input 
                                type="password" 
                                className="login__input" 
                                placeholder="Password"
                                name="txtPassword"
                                onChange={ this.onHandleChange}
                                value={this.state.txtPassword}
                            />
                            <img src={pass} className="icon-pass"/>
                            {
                                this.state.warningPassword?
                                <img src={warn} className="warning__login" alt=""/>
                                :null
                            }        
                        </div>

                        <div>
                            <p id="login__error"></p>
                        </div>
                        <div className="register">
                            <a href="">Don't you have an account? Sign Up</a>
                        </div>
                        <div className="login__btn">
                            <button type="submit" className="login__button">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
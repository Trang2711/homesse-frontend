import './login.scss';
import { Component } from 'react';
import email from '../../images/email.png'
import pass from '../../images/padlock.png'
import warn from '../../images/exclamation-mark.png'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props);
        const token = localStorage.getItem("token");

        let LoggedIn = true;
        if(token == null){
            LoggedIn = false;
        }

        this.state = {
            email : '',
            password : '',
            warningEmail: false,
            warningPassword: false,
            LoggedIn
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
            if(this.state.email == "pthuc26@gmail.com" && this.state.password == "Thucnamsao123"){
                localStorage.setItem("token", "dvnsjdvnsjvndj");
                this.setState({
                    LoggedIn: true
                })
            }
        }
    }
    validationForm(){
        if(this.checkEmail() === false) return false;
        if(this.checkPassword() === false) return false;
        return true;
    }

    checkEmail(){
        const {email} = this.state;
        const regexEmail = /\S+@\S+\.\S+/;
        if (!regexEmail.test(email) && email.length === 0) {
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
        const {password} = this.state;
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(!regexPass.test(password)){
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
        if(this.state.LoggedIn){
            return <Redirect to="/"/>
        }
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
                                name="email"
                                onChange={ this.onHandleChange}
                                value={this.state.email}
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
                                name="password"
                                onChange={ this.onHandleChange}
                                value={this.state.password}
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
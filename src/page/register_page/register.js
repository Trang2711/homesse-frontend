import { Component } from 'react';
import './register.scss';
import warn from '../../images/exclamation-mark.png'
import { Redirect } from 'react-router-dom';
import userApi from '../../api/userApi';

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            phone_number : '',
            address : '',
            password : '',
            repassword : '',
            cmnd : '',
            role: 'renter',
            validationOk : false,
            warningFirstname: false,
            warningLastName: false,
            warningphone_number: false,
            warningEmail: false,
            warningPassword: false,
            warningrepassword: false,
            warningIdcard: false,
            warningAddress: false
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

    async onHandleSubmit(event){
        event.preventDefault();
        if(this.validationForm()){
            console.log(this.state);
            const res = await userApi.createAccount(this.state);
            console.log(res);
            this.setState({
                validationOk: true
            })
        }
    }

    //xử lý sự kiện khi ấn btn register
    validationForm(){
        if(this.checkFirstname() === false) return false;
        if(this.checkLastname() === false) return false;
        if(this.checkEmail() === false) return false;
        if(this.checkphone_number() === false) return false;
        if(this.checkAddress() === false) return false;
        if(this.checkPassword() === false) return false;
        if(this.checkrepassword() === false) return false;
        if(this.checkrole() === true){
            if(this.checkIdCard() === false) return false;
        }
        return true;
    }

    //kiem tra firstname
    checkFirstname(){
        const {firstname} = this.state;
        if(firstname.length === 0){
            this.setState({
                warningFirstname: true
            })
            return false;
        }else{
            this.setState({
                warningFirstname: false
            })
            return true;
        }
    }

    //kiem tra lastname
    checkLastname(){
        const {lastname} = this.state;
        if(lastname.length === 0){
            this.setState({
                warningLastName: true
            })
            return false;
        }else{
            this.setState({
                warningLastName: false
            })
            return true;
        }
    }

    //kiem tra email
    checkEmail(){
        const {email} = this.state;
        const regexEmail = /\S+@\S+\.\S+/;
        if (!regexEmail.test(email) && email.length === 0) {
            this.setState({
                warningEmail: true
            })
            return false;
        }else{
            this.setState({
                warningEmail: false
            })
            return true;
        }
    }

    //kiểm tra địa chỉ
    checkAddress(){
        const {address} = this.state;
        if(address.length === 0){
            this.setState({
                warningAddress: true
            })
            return false;
        }else{
            this.setState({
                warningAddress: false
            })
            return true;
        }
    }

    //kiểm tra trạng thái người dùng
    checkrole(){
        const {role} = this.state;
        if(role === "owner"){
            return true;
        }
        else{
            this.setState({
                cmnd: ""
            })
            return false;
        }
        
    }

    //kiểm tra thẻ cmnd
    checkIdCard(){
        const {cmnd} = this.state;
        const regexIdcard = /^[0-9]{12}$/;
        if (!regexIdcard.test(cmnd) && cmnd.length !== 12) {
            this.setState({
                warningIdcard: true
            })
            return false;
        }else{
            this.setState({
                warningIdcard: false
            })
            return true;
        }
    }

    //kiểm tra phone_number
    checkphone_number(){
        const {phone_number} = this.state;
        const regexphone_number = /^[0-9]{10}$/;
        if(phone_number.length !== 10 && !regexphone_number.test(phone_number)){
            document.getElementById("register__phone_numberError").innerText = "Số điện thoại 10 số";
            this.setState({
                warningphone_number: true
            })
            return false;
        }else{
            document.getElementById("register__phone_numberError").innerText = "";
            this.setState({
                warningphone_number: false
            })
            return true;
        }
    }

    //kiểm tra mk
    checkPassword(){
        const {password} = this.state;
        const regexPass = /^.{6,}$/;
        if(!regexPass.test(password)){
            document.getElementById("register__passError").innerText = "Mật khẩu dài hơn 6 ký tự!";
            this.setState({
                warningPassword: true
            })
            return false;
        }else{
            document.getElementById("register__passError").innerText = "";
            this.setState({
                warningPassword: false
            })
            return true;
        }
    }

    //kiểm tra cf mk
    checkrepassword(){
        const {password, repassword} = this.state;
        if(password !== repassword){
            document.getElementById("register__cfpassError").innerText = "Mật khẩu không trùng khớp!";
            this.setState({
                warningrepassword: true
            })
            return false;
        }else{
            document.getElementById("register__cfpassError").innerText = "";
            this.setState({
                warningrepassword: false
            })
            return true;
        }
    }
    render() {
        if(this.state.validationOk) return <Redirect to="/login"/>
        return(
            <div className="register__container">
                <div className="register__inner">
                    <div className="register__title">
                        <h1 className="register__title__main">HOMESSE</h1>
                        <h2 className="register__title__extra">FIND YOUR HOME</h2>
                    </div>
                    <form className="form-register" onSubmit={ this.onHandleSubmit}>
                        <div className="group-input">
                            <label>First Name<sup>*</sup>:</label>
                            <input 
                                type="text" 
                                className="required" 
                                name="firstname"
                                onChange={ this.onHandleChange}
                                value={this.state.firstname}
                            />
                            {
                                this.state.warningFirstname?
                                <img src={warn} className="register__warning" id="warning-fisrtname" alt=""/>
                                :null
                            }  
                            <br />
                        </div>
                        <div className="group-input">
                            <label>Last Name<sup>*</sup>:</label>
                            <input 
                                type="text" 
                                className="required" 
                                name="lastname"
                                onChange={ this.onHandleChange}
                                value={this.state.lastname}
                            />
                            {
                                this.state.warningLastName?
                                <img src={warn} className="register__warning" id="warning-lastname" alt=""/>
                                :null
                            }
                            <br />
                        </div>
                        <div className="group-input">
                            <label>Email<sup>*</sup>:</label>
                            <input 
                                type="email" 
                                className="required" 
                                name="email"
                                onChange={ this.onHandleChange}
                                value={this.state.email}
                            />
                            {
                                this.state.warningEmail?
                                <img src={warn} className="register__warning" id="warning-email" alt=""/>
                                :null
                            }                           
                        </div>
                        <div className="group-input">
                            <label>Phone<sup>*</sup>:</label>
                            <input 
                                type="text" 
                                className="required" 
                                name="phone_number"
                                onChange={ this.onHandleChange}
                                value={this.state.phone_number}
                            />
                            {
                                this.state.warningphone_number?
                                <img src={warn} className="register__warning" id="warning-phone_number" alt=""/>
                                :null
                            }
                            <br/>
                            <p className="register__error" id="register__phone_numberError"></p>
                        </div>
                        <div className="group-input">
                            <label>Address<sup>*</sup>:</label>
                            <input 
                                type="text" 
                                className="required" 
                                name="address"
                                onChange={ this.onHandleChange}
                                value={this.state.address}
                            />
                            {
                                this.state.warningAddress?
                                <img src={warn} className="register__warning" id="warning-address" alt=""/>
                                :null
                            }                               
                        </div>
                        <div className="group-input">
                            <label>Password<sup>*</sup>:</label>
                            <input 
                                type="password" 
                                className="required"
                                name="password"
                                onChange={ this.onHandleChange}
                                value={this.state.password}
                            />
                            {
                                this.state.warningPassword?
                                <img src={warn} className="register__warning" id="warning-password" alt=""/>
                                :null
                            } 
                            <br />
                            <p className="register__error" id="register__passError"></p>
                        </div>
                        <div className="group-input">
                            <label>Confirm Password<sup>*</sup>:</label>
                            <input 
                                type="password" 
                                className="required" 
                                name="repassword"
                                onChange={ this.onHandleChange}
                                value={this.state.repassword}
                            />
                            {
                                this.state.warningrepassword?
                                <img src={warn} className="register__warning" id="warning-repassword" alt=""/>
                                :null
                            }
                            <br />
                            <p className="register__error" id="register__cfpassError"></p>
                        </div>
                        <div className="group-radio">
                            <input 
                                type="radio" 
                                id="register__owner" 
                                value="owner" 
                                name="role"
                                onChange={ this.onHandleChange}
                                checked= { this.state.role === "owner" }
                            />
                            <label for="owner">Owner</label>
                            <input 
                                type="radio" 
                                id="register__renter" 
                                value="renter" 
                                name="role"
                                onChange={ this.onHandleChange}
                                checked= { this.state.role === "renter" }
                            />
                            <label for="renter">Renter</label>
                        </div>
                        <div className="group-input">
                            {
                                this.state.role === "owner"?
                                <div>
                                    <label>ID Card<sup>*</sup>:</label>
                                    <input 
                                        type="text" 
                                        className="required" 
                                        name="cmnd"
                                        onChange={ this.onHandleChange}
                                        value={this.state.cmnd}
                                    />
                                    {
                                        this.state.warningIdcard?
                                        <img src={warn} className="register__warning" id="warning-idcard" alt=""/>
                                        :null
                                    }
                                </div>
                                :(null && this.setState({cmnd: ''}))
                            }                 
                        </div>
                        <p className="register__successful">Bạn đã đăng ký thành công</p>
                        <div className="register__btn">
                            <button type="submit" className="register__button">REGISTER</button>
                        </div>               
                    </form>                   
                </div>
            </div>
        )
    }
}

export default RegisterPage;
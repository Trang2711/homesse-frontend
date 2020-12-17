import { Component } from 'react';
import './register.scss';
import warn from '../../images/exclamation-mark.png'

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            txtFirstname : '',
            txtLastname : '',
            txtEmail : '',
            txtPhone : '',
            txtAddress : '',
            txtPassword : '',
            txtCfPassword : '',
            txtIDcard : '',
            status: 'renter',
            warningFirstname: false,
            warningLastName: false,
            warningPhone: false,
            warningEmail: false,
            warningPassword: false,
            warningCfPassword: false,
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

    onHandleSubmit(event){
        event.preventDefault();
        const validation = this.validationForm();
        if(validation){
            console.log(this.state);
        }
    }

    //xử lý sự kiện khi ấn btn register
    validationForm(){
        if(this.checkFirstname() === false) return false;
        if(this.checkLastname() === false) return false;
        if(this.checkEmail() === false) return false;
        if(this.checkPhone() === false) return false;
        if(this.checkAddress() === false) return false;
        if(this.checkPassword() === false) return false;
        if(this.checkCfPassword() === false) return false;
        if(this.checkStatus() === true){
            if(this.checkIdCard() === false) return false;
        }
        return true;
    }

    //kiem tra firstname
    checkFirstname(){
        const {txtFirstname} = this.state;
        if(txtFirstname.length === 0){
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
        const {txtLastname} = this.state;
        if(txtLastname.length === 0){
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
        const {txtEmail} = this.state;
        const regexEmail = /\S+@\S+\.\S+/;
        if (!regexEmail.test(txtEmail) && txtEmail.length === 0) {
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
        const {txtAddress} = this.state;
        if(txtAddress.length === 0){
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
    checkStatus(){
        const {status} = this.state;
        if(status === "owner"){
            return true;
        }
        else{
            this.setState({
                txtIDcard: ""
            })
            return false;
        }
        
    }

    //kiểm tra thẻ cmnd
    checkIdCard(){
        const {txtIDcard} = this.state;
        const regexIdcard = /^[0-9]{9}$/;
        if (!regexIdcard.test(txtIDcard) && txtIDcard.length !== 9) {
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

    //kiểm tra phone
    checkPhone(){
        const {txtPhone} = this.state;
        const regexPhone = /^[0-9]{10}$/;
        if(txtPhone.length !== 10 && !regexPhone.test(txtPhone)){
            document.getElementById("register__phoneError").innerText = "Số điện thoại phải đúng 10 số";
            this.setState({
                warningPhone: true
            })
            return false;
        }else{
            document.getElementById("register__phoneError").innerText = "";
            this.setState({
                warningPhone: false
            })
            return true;
        }
    }

    //kiểm tra mk
    checkPassword(){
        const {txtPassword} = this.state;
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(!regexPass.test(txtPassword)){
            document.getElementById("register__passError").innerText = "Mật khẩu phải hơn 8 ký tự, có chữ hoa, chữ thường, chữ số!";
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
    checkCfPassword(){
        const {txtPassword, txtCfPassword} = this.state;
        if(txtPassword !== txtCfPassword){
            document.getElementById("register__cfpassError").innerText = "Mật khẩu không trùng khớp!";
            this.setState({
                warningCfPassword: true
            })
            return false;
        }else{
            document.getElementById("register__cfpassError").innerText = "";
            this.setState({
                warningCfPassword: false
            })
            return true;
        }
    }
    render() {
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
                                name="txtFirstname"
                                onChange={ this.onHandleChange}
                                value={this.state.txtFirstname}
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
                                name="txtLastname"
                                onChange={ this.onHandleChange}
                                value={this.state.txtLastname}
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
                                name="txtEmail"
                                onChange={ this.onHandleChange}
                                value={this.state.txtEmail}
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
                                name="txtPhone"
                                onChange={ this.onHandleChange}
                                value={this.state.txtPhone}
                            />
                            {
                                this.state.warningPhone?
                                <img src={warn} className="register__warning" id="warning-phone" alt=""/>
                                :null
                            }
                            <br/>
                            <p className="register__error" id="register__phoneError"></p>
                        </div>
                        <div className="group-input">
                            <label>Address<sup>*</sup>:</label>
                            <input 
                                type="text" 
                                className="required" 
                                name="txtAddress"
                                onChange={ this.onHandleChange}
                                value={this.state.txtAddress}
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
                                name="txtPassword"
                                onChange={ this.onHandleChange}
                                value={this.state.txtPassword}
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
                                name="txtCfPassword"
                                onChange={ this.onHandleChange}
                                value={this.state.txtCfPassword}
                            />
                            {
                                this.state.warningCfPassword?
                                <img src={warn} className="register__warning" id="warning-cfpassword" alt=""/>
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
                                name="status"
                                onChange={ this.onHandleChange}
                                checked= { this.state.status === "owner" }
                            />
                            <label htmlFor="owner">Owner</label>
                            <input 
                                type="radio" 
                                id="register__renter" 
                                value="renter" 
                                name="status"
                                onChange={ this.onHandleChange}
                                checked= { this.state.status === "renter" }
                            />
                            <label htmlFor="renter">Renter</label>
                        </div>
                        <div className="group-input">
                            {
                                this.state.status === "owner"?
                                <div>
                                    <label>ID Card<sup>*</sup>:</label>
                                    <input 
                                        type="text" 
                                        className="required" 
                                        name="txtIDcard"
                                        onChange={ this.onHandleChange}
                                        value={this.state.txtIDcard}
                                    />
                                    {
                                        this.state.warningIdcard?
                                        <img src={warn} className="register__warning" id="warning-idcard" alt=""/>
                                        :null
                                    }
                                </div>
                                :(null && this.setState({txtIDcard: ''}))
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
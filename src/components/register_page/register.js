import { Component } from 'react';
import './register.scss';
import warn from '../../images/exclamation-mark.png'

class RegisterPage extends Component {
    render() {
        return(
            <div className="register__container">
                <div className="register__inner">
                    <div className="register__title">
                        <h1>HOMESSE</h1>
                        <h2>FIND YOUR HOME</h2>
                    </div>
                    <div className="form-register">
                        <div className="group-input">
                            <label>First Name<sup>*</sup>:</label>
                            <input type="text" className="required" />
                            <img src={warn} className="register__warning" alt=""/>
                            <br />
                        </div>
                        <div className="group-input">
                            <label>Last Name<sup>*</sup>:</label>
                            <input type="text" className="required" />
                            <img src={warn} className="register__warning" alt=""/>
                            <br />
                        </div>
                        <div className="group-input">
                            <label>Email<sup>*</sup>:</label>
                            <input type="email" className="required" />
                            <img src={warn} className="register__warning" alt=""/>
                        </div>
                        <div className="group-input">
                            <label>Phone<sup>*</sup>:</label>
                            <input type="text" className="required" />
                            <img src={warn} className="register__warning" alt=""/>
                        </div>
                        <div className="group-input">
                            <label>Address<sup>*</sup>:</label>
                            <div className="group-input__content">
                                <select className="info-address" name="" id="address_city">
                                    <option value="">Tỉnh/Thành phố</option>
                                </select>
                                <select className="info-address" name="" id="address_district">
                                    <option value="">Quận/Huyện</option>
                                </select>
                                <select className="info-address" name="" id="address_wards">
                                    <option value="">Xã/Phường</option>
                                </select>
                                <div>
                                    <input type="text" id="address_way" className="info-address" placeholder="Đường"/>
                                    <input type="text" id="address_numberhouse" className="info-address" placeholder="Số nhà"/>
                                </div>     
                            </div>  
                            <img src={warn} className="register__warning" alt=""/>                          
                        </div>
                        <div className="group-input">
                            <label>PassWord<sup>*</sup>:</label>
                            <input type="password" className="required"/>
                            <img src={warn} className="register__warning" alt=""/>
                            <br />
                            <p className="register__passerror">Mật khẩu phải hơn 8 ký tự, có chữ hoa, chữ thường, chữ số!</p>
                        </div>
                        <div className="group-input">
                            <label>Confirm PassWord<sup>*</sup>:</label>
                            <input type="password" className="required" />
                            <img src={warn} className="register__warning" alt=""/>
                            <br />
                            <p className="register__passerror">Mật khẩu không trùng khớp!</p>
                        </div>
                        <div className="group-radio"> 
                            <input type="radio" id="register__owner" value="owner"/>
                            <label for="owner">Owner</label>
                            <input type="radio" id="register__renter" value="renter"/>
                            <label for="renter">Renter</label>
                        </div>
                        <div className="group-input">
                            <label>ID Card:</label>
                            <input type="text" className="notreq" />
                            <img src={warn} className="register__warning" alt=""/>
                        </div>
                        <p className="register__successful">Bạn đã đăng ký thành công</p>
                        <div className="register__btn">
                            <button className="register__button">REGISTER</button>
                            <button className="register__button-login">LOGIN</button>
                        </div>               
                    </div>                   
                </div>
            </div>
        )
    }
}

export default RegisterPage;
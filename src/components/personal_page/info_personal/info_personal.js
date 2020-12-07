import './info_personal.scss';
import { Component } from 'react';

class InfoPersonal extends Component {
    render() {
        var { fullName, avatar, email, phoneNumber, address, identityCard } = this.props;
        return (
            <div className="info-personal__container">
                <div className="avatar__container">
                    <div className="avatar__image"></div>
                    <div className="avatar__name">{fullName}Trịnh Thị Thu Trang <i className="fas fa-edit"></i></div>
                </div>
                <div className="info__container">
                    <div className="info-col">
                        <div className="info-group">
                            <i className="fas fa-envelope"></i>
                            <span className="info-description">{email}trinhtrang27112000@gmail.com</span>
                        </div>
                        <div className="info-group">
                            <i className="fas fa-phone-alt"></i>
                            <span className="info-description">{phoneNumber}0978 924 372</span>
                        </div>
                    </div>
                    <div className="info-col">
                        <div className="info-group">
                            <i className="fas fa-map-marker-alt"></i>
                            <span className="info-description">{address}Văn Ổ - Đại Đồng - Văn Lâm - Hưng Yên</span>
                        </div>
                        <div className="info-group">
                            <i className="fas fa-address-card"></i>
                            <span className="info-description">{identityCard}033 300 000 664</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default InfoPersonal;
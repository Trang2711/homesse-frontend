import './info_personal.scss';


function InfoPersonal (props) {

        
    console.log(props.userInfo);
        var { avatar, email, phone_number, address, cmnd, fullName } = props.userInfo;
        
        return (
            <div className="info-personal__container">
                <div className="avatar__container">
                    <div className="avatar__image"></div>
                    <div className="avatar__name">{fullName}<i className="fas fa-edit" ></i></div>
                </div>
                <div className="info__container">
                    <div className="info-col">
                        <div className="info-group">
                            <i className="fas fa-envelope"></i>
                            <span className="info-description">{email}</span>
                        </div>
                        <div className="info-group">
                            <i className="fas fa-phone-alt"></i>
                            <span className="info-description">{phone_number}</span>
                        </div>
                    </div>
                    <div className="info-col">
                        <div className="info-group">
                            <i className="fas fa-map-marker-alt"></i>
                            <span className="info-description">{address}</span>
                        </div>
                        <div className="info-group">
                            <i className="fas fa-address-card"></i>
                            <span className="info-description">{cmnd}</span>
                        </div>
                    </div>

                </div>
            </div>
        )
}

export default InfoPersonal;
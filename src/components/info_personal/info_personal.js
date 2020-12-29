import './info_personal.scss';
import EditInfoForm from '../../components/edit_info_form/edit_info_form';
import { useRef, useState } from 'react';
// import userApi from '../../api/userApi';


function InfoPersonal(props) {
    var userInfo = {
        fullName: "",
        email: "",
        phone_number: "",
        address: "",
        cmnd: ""
    }
    
    if(!props.user){
        console.log(props.userInfo);
        console.log(props.userInfo.user);
        let user = props.userInfo.user;
        let address = props.userInfo.address;
        userInfo = {
            fullName: user.firstname + user.lastname,
            email: user.email,
            phone_number: user.phone_number,
            address: address,
            cmnd: user.cmnd
        }
    }
    
    const dialog = useRef(null);

    function handleOpenForm() {
        dialog.current.showModal();
    }

    function handleCloseForm() {
        console.log("close");
        dialog.current.close();
    }

    return (
        <div className="info-personal__container">
            <div className="avatar__container">
                <div className="avatar__image"></div>
                <div className="avatar__name">{userInfo.fullName}<i className="fas fa-edit" onClick={handleOpenForm}></i></div>
            </div>
            <div className="info__container">
                <div className="info-col">
                    <div className="info-group">
                        <i className="fas fa-envelope"></i>
                        <span className="info-description">{userInfo.email}</span>
                    </div>
                    <div className="info-group">
                        <i className="fas fa-phone-alt"></i>
                        <span className="info-description">{userInfo.phone_number}</span>
                    </div>
                </div>
                <div className="info-col">
                    <div className="info-group">
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="info-description">{userInfo.address}</span>
                    </div>
                    <div className="info-group">
                        <i className="fas fa-address-card"></i>
                        <span className="info-description">{userInfo.cmnd}</span>
                    </div>
                </div>

            </div>

            <dialog className="edit-info scrollbar" ref={dialog}>
                <EditInfoForm oldInfo={props.userInfo} onFormClose={handleCloseForm} />
            </dialog>
        </div>
    )
}

export default InfoPersonal;
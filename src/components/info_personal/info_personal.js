import './info_personal.scss';
import EditInfoForm from '../../components/edit_info_form/edit_info_form';
import { useRef } from 'react';


function InfoPersonal(props) {


    console.log(props.userInfo);
    var { avatar, email, phone_number, address, cmnd, firstName, lastName } = props.userInfo;
    
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
                <div className="avatar__name">{firstName + " " + lastName}<i className="fas fa-edit" onClick={handleOpenForm}></i></div>
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

            <dialog className="edit-info scrollbar" ref={dialog}>
                <EditInfoForm oldInfo={props.userInfo} onFormClose={handleCloseForm} />
            </dialog>
        </div>
    )
}

export default InfoPersonal;
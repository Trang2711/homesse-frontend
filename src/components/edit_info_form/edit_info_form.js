import './edit_info_form.scss';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const EditInfoSchema = yup.object().shape({
    // title: yup.string().max(65).required(),
    // price: yup.number().required(),
    // area: yup.number().required(),
    // address: yup.string().required(),
    // rooms: yup.number().required()
    //   website: yup.string().url()
});


function EditInfoForm(props) {

    const { onFormClose, oldInfo } = props;

    
    console.log(oldInfo);
    var { avatar, email, phone_number, address, cmnd, firstName, lastName } = oldInfo;

    // const [info, setInfo] = useState();

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(EditInfoSchema)
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    function handleCloseForm() {
        console.log("close form");
        if (onFormClose) {
            onFormClose();
        }
    }

    return (
        <div className="edit-info__container">
            <h3 className="edit-info__title">Chỉnh sửa thông tin cá nhân</h3>
            <form method="dialog" className="edit-post-form" ref={register} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                <div className="form-group">
                    <label>Họ và tên đệm<sup>*</sup></label>
                    <input type="text" name="firstName" id="" placeholder="Nguyễn Văn" value={firstName} ref={register} />
                </div>
                <div className="form-group">
                    <label>Tên<sup>*</sup></label>
                    <input type="text" name="lastName" id="" placeholder="Hùng" value={lastName} ref={register} />
                </div>
                </div>
                <div className="form-group">
                    <label>Địa chỉ<sup>*</sup></label>
                    <input type="text" name="address" id="" placeholder="Địa chỉ chi tiết" value={address} ref={register} />
                </div>
                <div className="form-group">
                    <label>Số CMND<sup>*</sup></label>
                    <input type="text" name="cmnd" id="" placeholder="Số chứng minh nhân dân" value={cmnd} ref={register} />
                </div>
                <div className="form-group">
                    <label>Số điện thoại<sup>*</sup></label>
                    <input type="text" name="phoneNumber" id="" placeholder="Số điện thoại" value={phone_number} ref={register} />
                </div>
                <div className="form-group">
                    <label>Ảnh đính kèm</label>
                    <input name="images" type='file' multiple accept="image/gif, image/jpeg, image/png" ref={register} />
                    <div className="upload__container"></div>
                </div>
                <div className="form__footer">
                    <button className="btn--grey mr" onClick={handleCloseForm}>Hủy bỏ</button>
                    <button className="btn--blue" type="submit" onClick={handleCloseForm}>Áp dụng</button>
                </div>
            </form>
        </div >
    )
}

export default EditInfoForm;
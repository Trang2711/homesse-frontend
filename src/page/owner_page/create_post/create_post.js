import './create_post.scss';
import { useForm } from "react-hook-form";
import React, { useState, useRef } from "react";
import { useSelector } from 'react-redux';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const CreatePostSchema = yup.object().shape({
    title: yup.string().max(65).required(),
    price: yup.number().required(),
    area: yup.number().required(),
    address: yup.string().required(),
    rooms: yup.number().required()
    //   website: yup.string().url()
});


function CreatePost(props) {

    const {onSubmitToServer} = props;

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(CreatePostSchema)
    });

    const [owner, setOwner] = useState();

    const typingTimeoutRef = useRef(null);

    function handleClickOwner() {
        setOwner(!owner);
    }

    const postPrice = useSelector(state => state.postPrice);

    const [numerDate, setNumerDate] = useState(0);

    function renderPrice(_numberDate) {
        console.log(_numberDate);
    }
    function handleNumberDateChange(e) {
        setNumerDate(e.target.value);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const inputValues = { numerDate: e.target.value };
            renderPrice(inputValues);
        }, 400);
    }

    const onSubmit = (data) => {
        console.log(data);
        let furniture = "";
        furniture = addFurniture(data.air_conditioner, furniture, "điều hòa");
        furniture = addFurniture(data.balcony, furniture, "ban công");
        furniture = addFurniture(data.bathroom, furniture, "phòng tắm riêng");
        furniture = addFurniture(data.bed, furniture, "giường ngủ");
        furniture = addFurniture(data.fridge, furniture, "tủ lạnh");
        furniture = addFurniture(data.kitchen, furniture, "bếp");
        furniture = addFurniture(data.parking, furniture, "chỗ để xe");
        furniture = addFurniture(data.washing_machine, furniture, "máy giặt");
        furniture = addFurniture(data.wifi, furniture, "internet");
        furniture = furniture.substring(0, furniture.length - 1);
        let dataFomat = {
            address: data.address,
            furniture: furniture,
            area: data.area,
            description: data.description,
            is_owner: data.is_owner,
            number_date: data.number_date,
            place_around: data.place_around,
            price: data.price,
            rooms: data.rooms,
            title: data.title,
            images: data.images,
            type: data.type
        };
        console.log(dataFomat);
        onSubmitToServer(dataFomat);
    }

    function addFurniture (params, oldString, addString) {
        if(params) return oldString + addString + ",";
        return oldString;
    }
    return (
        <div className="create-post__container">
            <h3 className="create-post__title">Tạo bài viết mới</h3>
            <form className="create-post-form" ref={register} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Tiêu đề bài viết<sup>*</sup></label>
                    <textarea name="title" id="" cols="30" rows="2" placeholder="Tiêu đề" ref={register}></textarea>
                    {errors.title && <p>{errors.title.message}</p>}
                </div>

                <div className="form-group">
                    <label>Giá cả<sup>*</sup></label>
                    <div className="input-group-append">
                        <input type="number" name="price" id="" placeholder="3000000" ref={register} />
                        <span>VNĐ <sup></sup></span>
                    </div>
                </div>
                <div className="form-group">
                    <label>Diện tích<sup>*</sup></label>
                    <div className="input-group-append">
                        <input type="number" name="area" id="" placeholder="Diện tích sử dụng" ref={register} />
                        <span>m<sup style={{ color: "#393838" }}>2</sup></span>
                    </div>
                </div>

                <div className="form-group">
                    <label>Địa chỉ<sup>*</sup></label>
                    <input type="text" name="address" id="" placeholder="Địa chỉ chi tiết" ref={register} />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Số lượng phòng<sup>*</sup></label>
                        <input type="number" name="rooms" id="" placeholder="Số lượng phòng" ref={register} />
                    </div>
                    <div className="form-group">
                        <label>Loại phòng<sup>*</sup></label>
                        <select name="type" ref={register}>
                            <option value="chung cư">Chung cư</option>
                            <option value="phòng trọ">Phòng trọ</option>
                            <option value="homestay">Homestay</option>
                            <option value="nhà nguyên căn">Nhà nguyên căn</option>
                        </select>
                    </div>
                </div>
                <div className="form-group co-owner">
                    <label>Chung chủ<sup>*</sup></label>
                    <div className="form-group__inner">
                        <div className="check-box-group">
                            <input type="checkbox" id="" name="is_owner" value="1" checked={(owner) ? false : true} onClick={handleClickOwner} ref={register} />
                            <label>Có</label><br />
                        </div>
                        <div className="check-box-group">
                            <input type="checkbox" id="" name="is_owner" value="0" checked={(owner) ? true : false} onClick={handleClickOwner} />
                            <label>Không</label><br />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Cơ sở vật chất</label>
                    <div className="form-group__inner">
                        <div className="form-group__left">
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="air_conditioner" value="true" ref={register} />
                                <label>Điều hòa</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="washing_machine" value="true" ref={register} />
                                <label>Máy giặt</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="parking" value="true" ref={register} />
                                <label>Chỗ để xe</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="balcony" value="true" ref={register} />
                                <label>Ban công</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="bed" value="true" ref={register} />
                                <label>Giường ngủ</label><br />
                            </div>
                        </div>
                        <div className="form-group__right">
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="bathroom" value="true" ref={register} />
                                <label>Nhà vệ sinh riêng</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="fridge" value="true" ref={register} />
                                <label>Tủ lạnh</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="wifi" value="true" ref={register} />
                                <label>Internet</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="kitchen" value="true" ref={register} />
                                <label>Bếp</label><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Địa điểm xung quanh</label>
                    <textarea name="place_around" id="" cols="30" rows="3"
                        placeholder="Địa điểm công cộng gần đó" ref={register}></textarea>
                </div>
                <div className="form-group">
                    <label>Mô tả thêm</label>
                    <textarea name="description" id="" cols="30" rows="3"
                        placeholder="Giờ giấc ra vào, giá điện, nước, wifi, số người thuê phòng, ..." ref={register}></textarea>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Thời gian hiển thị bài đăng<sup>*</sup></label>
                        <div className="input-group-append">
                            <input type="number" name="number_date" id="" placeholder="Thời gian hiển thị bài đăng" onChange={handleNumberDateChange} ref={register} />
                            <span>ngày</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Số tiền phải nộp<sup></sup></label>
                        <input type="text" id="" value={numerDate * postPrice} ref={register}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Ảnh đính kèm</label>
                    <input name="images" type='file' multiple accept="image/gif, image/jpeg, image/png" ref={register} />
                    <div className="upload__container"></div>
                </div>
                <button type="submit">Đăng bài</button>
            </form>
        </div >
    )
}

export default CreatePost;
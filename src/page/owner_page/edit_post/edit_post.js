import './edit_post.scss';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import postApi from '../../../api/postApi';

const EditPostSchema = yup.object().shape({
    title: yup.string().max(65).required(),
    price: yup.number().required(),
    area: yup.number().required(),
    address: yup.string().required(),
    rooms: yup.number().required()
//   website: yup.string().url()
});


function EditPostForm(props) {

    const {onFormClose, postId} = props;

    const [post, setPost] = useState();

    useEffect(() => {
        async function fetchPost() {
            try {
                const params = { id: postId };
                const res = await postApi.getPosts(params);
                console.log(res);
                setPost(res[0]);
            } catch (error) {
                console.log("Error when fetching userInfo: " + error);
            }
        }
        if(postId) fetchPost();
    }, [postId]);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(EditPostSchema)
      });

    const [owner, setOwner] = useState();
    function handleClickOwner() {
        setOwner(!owner);
    }

    const onSubmit = (data) => { alert(JSON.stringify(data));
    };

    function handleCloseForm() {
        if(onFormClose){
            onFormClose();
        }
    }

    return (
        <div className="edit-post__container">
            <h3 className="edit-post__title">Chỉnh sửa bài đăng</h3>
            <form method="dialog" className="edit-post-form" ref={register} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Tiêu đề bài viết<sup>*</sup></label>
                    <textarea name="title" id="" cols="30" rows="2" placeholder="Tiêu đề" value={post&&post.title}  ref={register}></textarea>
                    {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Giá cả<sup>*</sup></label>
                        <div class="input-group-append">
                            <input type="number" name="price" id="" placeholder="3000000" value={post&&post.price} ref={register} />
                            <span>VNĐ <sup></sup></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Diện tích<sup>*</sup></label>
                        <div class="input-group-append">
                            <input type="number" name="area" id="" placeholder="Diện tích sử dụng" ref={register}/>
                            <span>m<sup style={{ color: "#393838" }}>2</sup></span>
                        </div>
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
                            <option value="apartment">Chung cư</option>
                            <option value="boarding-room">Phòng trọ</option>
                            <option value="homestay">Homestay</option>
                            <option value="house">Nhà nguyên căn</option>
                        </select>
                    </div>
                </div>
                <div className="form-group co-owner">
                    <label>Chung chủ<sup>*</sup></label>
                    <div className="form-group__inner">
                        <div className="check-box-group">
                            <input type="checkbox" id="" name="co-owner" value="true"  checked={(owner) ? false : true } onClick={handleClickOwner} ref={register}/>
                            <label>Có</label><br />
                        </div>
                        <div className="check-box-group">
                            <input type="checkbox" id="" name="co-owner" value="false" checked={(owner) ? true : false} onClick={handleClickOwner}/>
                            <label>Không</label><br />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Cơ sở vật chất</label>
                    <div className="form-group__inner">
                        <div className="form-group__left">
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="air-conditioner" value="true" ref={register}/>
                                <label>Điều hòa</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="washing_machine" value="true" ref={register}/>
                                <label>Máy giặt</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="parking" value="true" ref={register}/>
                                <label>Chỗ để xe</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="balcony" value="true" ref={register}/>
                                <label>Ban công</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="bed" value="true" ref={register}/>
                                <label>Giường ngủ</label><br />
                            </div>
                        </div>
                        <div className="form-group__right">
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="bathroom" value="true" ref={register}/>
                                <label>Nhà vệ sinh riêng</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="fridge" value="true" ref={register}/>
                                <label>Tủ lạnh</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="wifi" value="true" ref={register}/>
                                <label>Internet</label><br />
                            </div>
                            <div className="check-box-group">
                                <input type="checkbox" id="" name="kitchen" value="true" ref={register}/>
                                <label>Bếp</label><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Địa điểm xung quanh</label>
                    <textarea name="place-around" id="" cols="30" rows="3"
                        placeholder="Địa điểm công cộng gần đó" ref={register}></textarea>
                </div>
                <div className="form-group">
                    <label>Mô tả thêm</label>
                    <textarea name="description" id="" cols="30" rows="3"
                        placeholder="Giờ giấc ra vào, giá điện, nước, wifi, số người thuê phòng, ..." ref={register}></textarea>
                </div>
                <div className="form-group">
                    <label>Ảnh đính kèm</label>
                    <input name="images" type='file' multiple accept="image/gif, image/jpeg, image/png" ref={register}/>
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

export default EditPostForm;
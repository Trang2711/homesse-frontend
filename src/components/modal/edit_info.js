
function EditInfoModal(props) {
    return (
        <div className="edit-info-modal">
            <dialog id="createPostModal">
                <form method="dialog">
                    <div className="form__header">
                        <i className="fas fa-chevron-left"></i>
                        <h2>Đăng bài</h2>
                        <button><i className="fas fa-times"></i></button>
                    </div>
                    <div className="form__content">
                        <div className="form__page">
                            <textarea name="title" id="" cols="30" rows="2" placeholder="Tiêu đề bài đăng"></textarea>
                            <input type="text" name="address" id="" placeholder="Địa chỉ chi tiết" />
                            <div className="group-input">
                                <input type="text" name="price" id="" placeholder="3000000" />
                            </div>
                            <div className="group-input">
                                <input type="number" name="area" id="" placeholder="Diện tích sử dụng" />
                            </div>
                            <div className="group-input">
                                <input type="number" name="rooms" id="" placeholder="Số lượng phòng" />
                            </div>
                            <select name="type">
                                <option value="">Loại phòng</option>
                                <option value="apartment">Chung cư</option>
                                <option value="boarding-room">Phòng trọ</option>
                                <option value="homestay">Homestay</option>
                                <option value="house">Nhà nguyên căn</option>
                            </select>

                            <div className="select-group">
                                <div className="check-box-group">
                                    <input type="checkbox" id="" name="co-owner" value="true" />
                                    <label>Có</label><br />
                                </div>
                                <div className="check-box-group">
                                    <input type="checkbox" id="" name="co-owner" value="false" />
                                    <label>Không</label><br />
                                </div>
                            </div>
                        </div>
                        <div className="form__page">
                            <div className="select-group">
                                <label>Cơ sở vật chất</label>
                                <div className="check-box-group">
                                    <input type="checkbox" id="" name="air-conditioner" value="true" />
                                    <label>Điều hòa</label><br />
                                </div>
                                <div className="check-box-group">
                                    <input type="checkbox" id="" name="washing_machine" value="true" />
                                    <label>Máy giặt</label><br />
                                </div>
                                <div className="check-box-group">
                                    <input type="checkbox" id="" name="parking" value="true" />
                                    <label>Chỗ để xe</label><br />
                                </div>
                                <div className="check-box-group">
                                    <input type="checkbox" id="" name="balcony" value="true" />
                                    <label>Ban công</label><br />
                                </div>
                                <div className="check-box-group">
                                    <input type="checkbox" id="" name="bed" value="true" />
                                    <label>Giường ngủ</label><br />
                                </div>
                                <div className="check-box-group">
                                    <input type="checkbox" id="" name="bathroom" value="true" />
                                    <label>Nhà vệ sinh riêng</label><br />
                                </div>
                                <div className="check-box-group">
                                    <input type="checkbox" id="" name="fridge" value="true" />
                                    <label>Tủ lạnh</label><br />
                                </div>
                                <div className="check-box-group">
                                    <input type="checkbox" id="" name="wifi" value="true" />
                                    <label>Internet</label><br />
                                </div>
                                <div className="check-box-group">
                                    <input type="checkbox" id="" name="kitchen" value="true" />
                                    <label>Bếp</label><br />
                                </div>
                            </div>
                        </div>
                        <div className="form__page">
                            <textarea name="place-around" id="" cols="30" rows="3"
                                placeholder="Địa điểm công cộng gần đó"></textarea>
                            <textarea name="description" id="" cols="30" rows="3"
                                placeholder="Giờ giấc ra vào, giá điện, nước, wifi, số người thuê phòng, ..."></textarea>
                            <input type="image" id="myFile" name="filename" alt="" />
                        </div>
                    </div>
                <div className="form__command">
                    <div>Tiếp tục</div>
                </div>
                </form>
            </dialog>
        </div >
    )
}

export default EditInfoModal;
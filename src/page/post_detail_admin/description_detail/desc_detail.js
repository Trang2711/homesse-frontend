import './desc_detail.scss';

function DescriptionDetail(props){
    const data = props.data;
    return(
        <div className="desc_detail__container">
            <h3 className="desc_detail__title">
                Mô tả chi tiết 
            </h3>
            <div className="underlined"></div>
            <div className="description_detail">
                <div className="description_detail1">
                    <div>
                        <label className="label_description">Loại phòng: </label>
                        <p className="description">Căn hộ mini</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Diện tích: </label>
                        <p className="description">35m2</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Chung chủ: </label>
                        <p className="description">Không</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Số lượng phòng: </label>
                        <p className="description">6</p>
                    </div>
                </div>
                <div className="description_detail2">
                    <div>
                        <label className="label_description">Địa chỉ: </label>
                        <p className="description">Số 10 Phạm Văn Đồng, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Giá: </label>
                        <p className="description">3.500.000 đ/tháng</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Giá điện: </label>
                        <p className="description">4.000 đ/số</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Giá nước: </label>
                        <p className="description">4.000 đ/m3</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}
export default DescriptionDetail;
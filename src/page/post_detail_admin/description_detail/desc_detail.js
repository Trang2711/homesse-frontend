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
                        <p className="description">{data && data.boarding.type_boarding}</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Diện tích: </label>
                        <p className="description">{data && data.boarding.area}<span> m2</span></p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Chung chủ: </label>
                        <p className="description">{data && (data.boarding.is_owner === 1) ? "Có" : "Không"}</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Số lượng phòng: </label>
                        <p className="description">{data && data.post.rooms}</p>
                    </div>
                </div>
                <div className="description_detail2">
                    <div>
                        <label className="label_description">Địa điểm xung quanh: </label>
                        <p className="description">{data && data.boarding.places_around + ""}</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Giá: </label>
                        <p className="description">{data && data.boarding.price} đ/tháng</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Giá điện: </label>
                        <p className="description">{data && (data.boarding.electricity_water === 2) ? "Giá dân" : ""}</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Giá nước: </label>
                        <p className="description">{data && (data.boarding.electricity_water === 2) ? "Giá dân" : ""}</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}
export default DescriptionDetail;
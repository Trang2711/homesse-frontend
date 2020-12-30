import './desc_detail.scss';

function DescriptionDetail(props){
    const data = props.data;

    function setValueInput(type){
        console.log("this here");
        if(!data) return;
        if(type === "electricity_price"){
            if(data.boarding.electricity_water === 2){
                return "gia dan";
            } else {
                return data.boarding.electricity_price;
            }
        }
        if(type === "water_price"){
            if(data.boarding.electricity_water === 2){
                return "gia dan";
            } else {
                return data.boarding.water_price;
            }
        }
        return "";
    }
    var electricity_price = setValueInput("electricity_price");
    var water_price = setValueInput("water_price");
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
                        <label className="label_description">Địa chỉ xung quanh: </label>
                        <p className="description">{data && data.boarding.places_around + ""}</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Giá: </label>
                        <p className="description">{data && data.boarding.price} đ/tháng</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Giá điện: </label>
                        <p className="description">{electricity_price + "đ/số"}</p>
                    </div>
                    <div className="desc_detail">
                        <label className="label_description">Giá nước: </label>
                        <p className="description">{water_price + "đ/m3"}</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}
export default DescriptionDetail;
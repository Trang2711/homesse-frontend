import './facilities.scss';

function Facilities(){
    return(
        <div className="facilities__container">
            <h3 className="facilities__title">Cơ sở vật chất</h3>
            <div className="underlined_facilities"></div>
            <div className="facilities">
                <div className="facility__detail">
                    <input type="checkbox" name="facility1" value="Air conditioning" />
                    <label for="facility1"> Điều hòa</label><br/>
                    <input type="checkbox" className="facilities__name" name="facility2" value="Washing machine" />
                    <label for="facility2"> Máy giặt</label><br/>
                    <input type="checkbox" className="facilities__name" name="facility3" value="Gara" />
                    <label for="facility3"> Chỗ để xe</label><br/>
                </div>
                <div className="facility__detail">
                    <input type="checkbox" name="facility1" value="BanCong" />
                    <label for="facility1"> Ban công</label><br/>
                    <input type="checkbox" className="facilities__name" name="facility2" value="GiuongNgu" />
                    <label for="facility2"> Giường ngủ</label><br/>
                    <input type="checkbox" className="facilities__name" name="facility3" value="PhongTam" />
                    <label for="facility3"> Phòng tắm riêng</label><br/>
                </div>
                <div className="facility__detail">
                    <input type="checkbox" name="facility1" value="TuLanh" />
                    <label for="facility1"> Tủ lạnh</label><br/>
                    <input type="checkbox" className="facilities__name" name="facility2" value="Internet" />
                    <label for="facility2"> Internet</label><br/>
                    <input type="checkbox" className="facilities__name" name="facility3" value="Bep" />
                    <label for="facility3"> Bếp</label><br/>
                </div>
            </div>
            
        </div>
    );
}
export default Facilities;
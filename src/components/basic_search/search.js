import './search.scss';
import { useForm } from 'react-hook-form';
import {setSearchData} from '../../action/searchData_action';

function BasicSearch(props) {
    const {onRedirect} = props;
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        let prices = data.price.split('-');
        let areas = data.area.split('-');
        var searchData = {
            type:  data.type,
            price_min: prices[0],
            price_max: prices[1],
            area_min: areas[0],
            area_max: areas[1]
        };

        console.log(searchData);
        setSearchData(searchData);
        if(!onRedirect) return;
        onRedirect();
    };
    return (
        <div className="basic-search__container">
            <div className="basic-search__inner">
                <div className="basic-search__header">
                    <span className="basic-search__header--big">FIND YOUR DREAM PROPERTY </span><br></br>
                    <span className="basic-search__header--small">WITHIN A <span className="basic-search__header--black">SMALL BUDGET</span></span>
                </div>
                <div className="form-search__container">
                    <form className="form-search__inner" ref={register} onSubmit={handleSubmit(onSubmit)}>
                        <select name="type" ref={register}>
                            <option value="">Loại phòng</option>
                            <option value="apartment">Chung cư</option>
                            <option value="boarding-room">Phòng trọ</option>
                            <option value="homestay">Homestay</option>
                            <option value="house">Nhà nguyên căn</option>
                        </select>
                        <select name="price" ref={register}>
                            <option value="">Giá cả</option>
                            <option value="0-2">0 triệu - 2 triệu</option>
                            <option value="2-4">2 triệu - 4 triệu</option>
                            <option value="4-6">4 triệu - 6 triệu</option>
                            <option value="6">Hơn 6 triệu</option>
                        </select>
                        <select name="area" ref={register}>
                            <option value="">Diện tích</option>
                            <option value="0-20">0 m2 - 20 m2</option>
                            <option value="20-40">20 m2 - 40 m2</option>
                            <option value="40-50">40 m2 - 50 m2</option>
                            <option value="50">Hơn 50 m2</option>
                        </select>
                        {/* <input placeholder="Diện tích" ref={register}></input> */}
                        <button type="submit">TÌM KIẾM</button>
                    </form>
                    <div className="form-search_inner--more">Tìm kiếm nâng cao <i className="fal fa-angle-double-right"></i></div>
                </div>
            </div>
        </div>
    )
}

export default BasicSearch;
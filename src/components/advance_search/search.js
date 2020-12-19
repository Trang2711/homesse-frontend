import './search.scss';
import { Component } from 'react';

class AdvanceSearch extends Component {
    render() {
        return (
            <div className="advance-search">
                <h1 className="advance-search__header">Tìm kiếm nâng cao</h1>
                <div className="advance-search__container">
                    <form className="advance-search__form">
                        <div className="group-input">
                            <h2 className="group-input__title">Địa chỉ</h2>
                            <input type="text" placeholder="Địa chỉ"/>
                        </div>
                        <div className="group-input">
                            <h2 className="group-input__title">Cơ sở vật chất</h2>
                            <div className="input">
                                <input type="checkbox" name="airConditioner" id="airConditioner" />
                                <label htmlFor="airConditioner">Điều hòa</label>
                            </div>
                            <div className="input">
                                <input type="checkbox" name="washingMachine" id="washingMachine" />
                                <label htmlFor="washingMachine">Máy giặt</label>
                            </div>
                            <div className="input">
                                <input type="checkbox" name="heater" id="heater" />
                                <label htmlFor="heater">Điều hòa</label>
                            </div>
                            <div className="input">
                                <input type="checkbox" name="kitchen" id="kitchen" />
                                <label htmlFor="kitchen">Bếp</label>
                            </div>
                            <div className="input">
                                <input type="checkbox" name="toilet" id="toilet" />
                                <label htmlFor="toilet">Vệ sinh khép kín</label>
                            </div>
                            <div className="input last-input">
                                <input type="checkbox" name="stayWithOwner" id="stayWithOwner" />
                                <label htmlFor="stayWithOwner">Chung chủ</label>
                            </div>
                        </div>
                        <div className="group-input">
                            <h2 className="group-input__title">Khác</h2>
                            <select name="cars">
                                <option value="volvo">Loại phòng</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                            <select name="cars">
                                <option value="volvo">Giá cả</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                            <select name="cars">
                                <option value="volvo">Diện tích</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <button type="submit">TÌM KIẾM</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AdvanceSearch;
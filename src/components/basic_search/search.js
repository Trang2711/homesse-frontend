import './search.scss';
import { Component } from 'react';
// import { BrowerRouter as Router, Route, Link } from 'react-router-dom';

class BasicSearch extends Component {
    render() {
        return (
            <div className="basic-search">
                <div className="basic-search__header">
                    <span className="basic-search__header--big">FIND YOUR DRAM PROPERTY </span><br></br>
                    <span className="basic-search__header--small">WITHIN A <span className="basic-search__header--black">SMALL BUDGET</span></span>
                </div>
                <div className="basic-search__container">
                    <form className="basic-search__inner">
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
                        <input placeholder="Diện tích"></input>
                        <button type="submit">TÌM KIẾM</button>
                    </form>
                    <div className="basic-search_inner--more">Tìm kiếm nâng cao <i className="fal fa-angle-double-right"></i></div>
                </div>
            </div>
        )
    }
}

export default BasicSearch;
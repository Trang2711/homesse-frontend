import './title.scss';
import { Component } from 'react';
import React from 'react';
import located from '../../../images/placeholder.png';
import report from '../../../images/warning.png';
import like from '../../../images/like.png';
function Title(){
    return(
        <div className="title__container">
            <div className="title__header">
                <h1 className="title__main">Phòng trọ gần Đại học Công Nghệ</h1>
                <div className="title__money">
                    <h2 className="money__post"><span>$ </span>3.500.000<span> đ/tháng</span></h2>
                </div>
            </div>
            
            <div className="title__address">
                <img src={located} className="title__address__icon" alt=""/>
                <p className="address__post">134, Xuân Thủy, Cầu Giấy, Hà Nội</p>
            </div>
            <div className="title__footer"> 
                <div className="title__like">
                    <p id="title__like">0 <span>Like</span></p>
                </div>
                <div className="title__follow">
                    <p id="title__follow">0 <span>Theo dõi</span></p>
                </div>
                <div className="title__iconreport">
                    <img src={report} className="title__report__icon" alt=""/>
                </div>
                <div className="title__iconlike">
                    <img src={like} className="title__like__icon" alt=""/>
                </div>
                <button type="button" className="title__savepost">Lưu bài viết</button>
            </div>
            
        </div>
    );
}
export default Title;
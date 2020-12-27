import './title.scss';
import { Component } from 'react';
import React from 'react';
import located from '../../../images/placeholder.png';
import report from '../../../images/warning.png';
import like from '../../../images/like.png';
import {useState} from 'react'
function Title(){
    const [numberFollow, setnumberFollow] = useState(0);
    const [numberview, setnumberView] = useState(0);

    function clickUpdateState(){
        
    }
    
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
            <div className="title__date">
                <i class="far fa-clock title__date__icon"></i>
                <p className="date__post">20/12/2020-22/07/2021</p>
                <i class="fas fa-edit edit__datepost">
                    <span className="tooltip_editdate">Gia hạn bài viết</span>
                </i>
            </div>
            <div className="title__footer"> 
                <div className="title__view">
                    <p id="title__view"><span id="numberview">{numberview}</span> <span>Lượt xem</span></p>
                </div>
                <div className="title__follow">
                    <p id="title__follow"><span id="numberFollow">{numberFollow}</span> <span>Theo dõi</span></p>
                </div>
                <button type="button" className="title__updatestate" onClick={clickUpdateState}>Cập nhật trạng thái</button>
            </div>
            
        </div>
    );
}
export default Title;
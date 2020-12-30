import './title.scss';
import { Component } from 'react';
import React from 'react';
import located from '../../../images/placeholder.png';
import report from '../../../images/warning.png';
import like from '../../../images/like.png';
import {useState} from 'react'
function Title(props){
    const data = props.data;
    console.log(data);
    const [status, setStatus] = useState(data&&data.boarding.status);

    const [numberFollow, setnumberFollow] = useState(0);

    function clickUpdateState () {
        console.log("clicked");
        if(!status || status === 0) {
            setStatus(1);
        } else {
            setStatus(0);
        }
    }
    
    return(
        
        <div className="title__container">
            <div className="title__header">
                <h1 className="title__main">{data&&data.post.title}</h1>
                <div className="title__money">
                    <h2 className="money__post"><span>$ </span>{data && data.boarding.price}<span> đ/tháng</span></h2>
                </div>
            </div>
            
            <div className="title__address">
                <img src={located} className="title__address__icon" alt=""/>
                <p className="address__post">{data && data.boarding.address}</p>
            </div>
            <div className="title__date">
                <i class="far fa-clock title__date__icon"></i>
                <p className="date__post">{data && data.post_created_at} đến {data && data.post.time_display}</p>
                <i class="fas fa-edit edit__datepost">
                    <span className="tooltip_editdate">Gia hạn bài viết</span>
                </i>
            </div>
            <div className="title__footer">
                <div className="title__view">
                    <p id="title__view"><span id="numberview">{data && data.seen_post}</span> <span>Lượt xem</span></p>
                </div>
                <div className="title__follow">
                    <p id="title__follow"><span id="numberFollow">{data && data.like_post}</span> <span>Theo dõi</span></p>
                </div>
                <div className="title__status">
                    <p id="title__status"><span id="numberFollow">{data && (!status || status === 0) ? "Chưa được thuê" : "Đã được thuê"}</span></p>
                </div>
                <button type="button" className="title__updatestate" onClick={clickUpdateState}>Cập nhật trạng thái</button>
            </div>
            
        </div>
    );
}
export default Title;
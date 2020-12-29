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
    const [numberlike, setnumberLike] = useState(0);

    const [numberFollow, setnumberFollow] = useState(0);

    function clickConfirmPost(){

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
                <p className="date__post">{data && data.post.created_at}</p>
                <i class="fas fa-edit edit__datepost">
                    <span className="tooltip_editdate">Gia hạn bài viết</span>
                </i>
            </div>
            <div className="title__footer"> 
                {/* <div className="title__like">
                    <p id="title__like"><span id="numberView">0</span> <span>Lượt xem</span></p>
                </div> */}
                
                <button type="button" className="title__confirmpost" onClick={clickConfirmPost}>Duyệt bài viết</button>
            </div>
            
        </div>
    );
}
export default Title;
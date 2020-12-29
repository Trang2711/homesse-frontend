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

    function clickReport(){
        document.getElementById("title__report__icon").style.color = "#C2850A";
    }

    const [checkLike, setcheckLike] = useState(false);
    const [numberview, setnumberview] = useState(0);
    function clickLike(){
        setnumberview((checkLike === false) ? numberview + 1: numberview - 1);
        if(checkLike){
            setcheckLike(false);
            document.getElementById("title__view__icon").style.color = "rgb(163, 163, 163)";
        }else{
            setcheckLike(true);
            document.getElementById("title__view__icon").style.color = "#0A38C2";
        }
        console.log("like")
        
    }

    const [numberFollow, setnumberFollow] = useState(0);
    const [checkFollow, setcheckFollow] = useState(false);

    function clickSavePost(){
        if(!checkFollow){
            setnumberFollow(numberFollow + 1);
            setcheckFollow(true);
            window.alert("Bài viết đã được lưu!");
        }
        if(checkFollow){
            window.alert("Bài viết đã được lưu!");
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
            </div>
            <div className="title__footer"> 
                <div className="title__view">
                    <p id="title__view"><span id="numberview">{data && data.seen_post}</span> <span>Lượt xem</span></p>
                </div>
                <div className="title__follow">
                    <p id="title__follow"><span id="numberFollow">{data && data.like_post}</span> <span>Theo dõi</span></p>
                </div>
                <div className="title__iconreport">
                    <i className="fas fa-exclamation-triangle" id="title__report__icon" onClick={clickReport}></i>
                </div>
                <button type="button" className="title__savepost" onClick={clickSavePost}>Lưu bài viết</button>
            </div>
            
        </div>
    );
}
export default Title;
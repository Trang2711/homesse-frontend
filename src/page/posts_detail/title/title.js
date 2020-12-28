import './title.scss';
import { Component } from 'react';
import React from 'react';
import located from '../../../images/placeholder.png';
import report from '../../../images/warning.png';
import like from '../../../images/like.png';
import {useState} from 'react'
function Title(){
    
    

    function clickReport(){
        document.getElementById("title__report__icon").style.color = "#C2850A";
    }

    const [checkLike, setcheckLike] = useState(false);
    const [numberlike, setnumberLike] = useState(0);
    function clickLike(){
        setnumberLike((checkLike === false) ? numberlike + 1: numberlike - 1);
        if(checkLike){
            setcheckLike(false);
            document.getElementById("title__like__icon").style.color = "rgb(163, 163, 163)";
        }else{
            setcheckLike(true);
            document.getElementById("title__like__icon").style.color = "#0A38C2";
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
                    <p id="title__like"><span id="numberLike">{numberlike}</span> <span>Like</span></p>
                </div>
                <div className="title__follow">
                    <p id="title__follow"><span id="numberFollow">{numberFollow}</span> <span>Theo dõi</span></p>
                </div>
                <div className="title__iconreport">
                    <i className="fas fa-exclamation-triangle" id="title__report__icon" onClick={clickReport}></i>
                </div>
                <div className="title__iconlike">
                    <i className="fas fa-thumbs-up" id="title__like__icon" onClick={clickLike}></i>
                </div>
                <button type="button" className="title__savepost" onClick={clickSavePost}>Lưu bài viết</button>
            </div>
            
        </div>
    );
}
export default Title;
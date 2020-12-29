import './comment.scss';
import imageRoom from '../../../images/background_0.jpg';
import avatarComment from '../../../images/avatar1.jpg';
import starReviewed from '../../../images/star.png';
import star from '../../../images/star_bw.png';
import { useState } from 'react'
import StarRating from '../../../components/start_rating/star_rating'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from "react-hook-form";

const SubmitComment = yup.object().shape({
    // comment: yup.string().required(),
    // star: yup.number().required(),
});
function Comment(){
    
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SubmitComment)
    });


    const onSubmit = (data) => { 
        console.log("gdufkg");
        alert(JSON.stringify(data));

    };
    // function handleOnChange(){
    //     setcommentState(commentState.star = 1);
    //     console.log(commentState.star)
    // }
    return(
        <div className="comment__container">
            <div className="comment__people_other">
                <h3 className="comment__title">3 Bình luận</h3>
                <div className="underlined_comment"></div>
                <div className="comment__detail_confirmed">
                    <div className="comment__info">
                        <img src={avatarComment} className="comment__avatar" alt=""/>
                        <div className="comment__info_name_date">
                            <p className="comment__namepeople">Lan Nguyễn</p>
                            <p className="comment__date">13/12/2020</p>
                        </div>
                        <div className="comment__review">
                            <img src={starReviewed} className="reviewed_star" alt=""/>
                            <img src={starReviewed} className="reviewed_star" alt=""/>
                            <img src={starReviewed} className="reviewed_star" alt=""/>
                            <img src={starReviewed} className="reviewed_star" alt=""/>
                            <img src={starReviewed} className="reviewed_star" alt=""/>
                        </div>
                    </div>
                    <div className="comment__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, 
                            in finibus dui sapien eu dolor. 
                            Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.
                        </p>
                    </div>
                </div>
                <div className="comment__detail__confirmyet">
                    <div className="comment__info">
                        <img src={avatarComment} className="comment__avatar" alt=""/>
                        <div className="comment__info_name_date">
                            <p className="comment__namepeople">Lan Nguyễn</p>
                            <p className="comment__date">13/12/2020</p>
                        </div>
                        <div className="comment__review">
                            <img src={starReviewed} className="reviewed_star" alt=""/>
                            <img src={starReviewed} className="reviewed_star" alt=""/>
                            <img src={starReviewed} className="reviewed_star" alt=""/>
                            <img src={starReviewed} className="reviewed_star" alt=""/>
                            <img src={starReviewed} className="reviewed_star" alt=""/>
                        </div>
                    </div>
                    <div className="comment__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, 
                            in finibus dui sapien eu dolor. 
                            Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.
                        </p>
                    </div>
                    <div className="confirm__comment">
                        <i className="fas fa-exclamation-circle warning__cfcomment"></i>
                        <button className="btn__confirmComment">Duyệt bình luận</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Comment;
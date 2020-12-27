import "./comment.scss";
import imageRoom from "../../../images/background_0.jpg";
import avatarComment from "../../../images/avatar1.jpg";
import starReviewed from "../../../images/star.png";
import star from "../../../images/star_bw.png";
import { useState } from "react";
import StarRating from "../../../components/start_rating/star_rating";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const SubmitComment = yup.object().shape({
  // comment: yup.string().required(),
  // star: yup.number().required(),
});
function Comment() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SubmitComment),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  // function handleOnChange(){
  //     setcommentState(commentState.star = 1);
  //     console.log(commentState.star)
  // }
  return (
    <div className="comment__container">
      <div className="comment__people_other">
        <h3 className="comment__title">3 Bình luận</h3>
        <div className="underlined_comment"></div>
        <div className="comment__detail">
          <div className="comment__info">
            <img src={avatarComment} className="comment__avatar" alt="" />
            <div className="comment__info_name_date">
              <p className="comment__namepeople">Lan Nguyễn</p>
              <p className="comment__date">13/12/2020</p>
            </div>
            <div className="comment__review">
              <img src={starReviewed} className="reviewed_star" alt="" />
              <img src={starReviewed} className="reviewed_star" alt="" />
              <img src={starReviewed} className="reviewed_star" alt="" />
              <img src={starReviewed} className="reviewed_star" alt="" />
              <img src={starReviewed} className="reviewed_star" alt="" />
            </div>
          </div>
          <div className="comment__content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              aliquam, quam congue dictum luctus, lacus magna congue ante, in
              finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec
              laoreet ipsum vestibulum sed.
            </p>
            <img src={imageRoom} className="comment__image" alt="" />
          </div>
        </div>
      </div>

      <div className="comment__add">
        <h3 className="comment__add__title">Thêm bình luận</h3>
        <div className="underlined_comment"></div>
        <form
          className="review_comment_yourpost"
          ref={register}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="review_comment_yourpost__inner">
            <div className="review__post">
              <p>Đánh giá của bạn cho căn phòng này</p>
              <StarRating register={register} />
            </div>
            <div className="add__image">
              {/* <button className="btn__addimage">Thêm hình ảnh</button> */}
              {/* <input className="input__addimage" name="images" type='file' multiple accept="image/gif, image/jpeg, image/png" placeholder="Thêm hình ảnh"/> */}
              <input
                type="file"
                name="images"
                multiple
                accept="image/gif, image/jpeg, image/png"
                ref={register}
              />
            </div>
          </div>

          <textarea
            name="comment"
            id="your_comment"
            cols="60"
            rows="8"
            placeholder="Nội dung bình luận"
            ref={register}
          ></textarea>
          <button type="submit" className="send__comment">
            Gửi bình luận
          </button>
        </form>
      </div>
    </div>
  );
}
export default Comment;

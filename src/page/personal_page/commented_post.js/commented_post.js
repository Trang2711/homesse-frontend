import './commented_post.scss';
import { Component } from'react';

import Post from '../../../components/post/post';

class CommentedPost extends Component {
    render() {
        return(
            <div className="list-post__container">
                <h3 className="list-post__title">Bài viết đã bình luận</h3>
                <div className="list-post__inner">
                    <Post width="23.8rem" title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
                        image="/static/media/banner_2.f5a8d2b0.jpg"
                        intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
                        money="3.500.000 đ"
                        area="25 m2" />
                    <Post width="23.8rem" title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
                        image="/static/media/banner_2.f5a8d2b0.jpg"
                        intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
                        money="3.500.000 đ"
                        area="25 m2" />
                    <Post width="23.8rem" title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
                        image="/static/media/banner_2.f5a8d2b0.jpg"
                        intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
                        money="3.500.000 đ"
                        area="25 m2" />
                    <Post width="23.8rem" title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
                        image="/static/media/banner_2.f5a8d2b0.jpg"
                        intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
                        money="3.500.000 đ"
                        area="25 m2" />
                </div>
            </div>
        )
    }
}

export default CommentedPost;
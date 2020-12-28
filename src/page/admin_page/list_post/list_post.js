import './list_post.scss';
import { useEffect, useState } from 'react';
import postApi from '../../../api/postApi'

import Post from '../../../components/post/post_small/post_small';
import CheckReview from '../../../components/check_review/check_review';
import { useHistory } from 'react-router-dom';

function ListPost() {

    const [posts, setPosts] = useState([]);
    let history = useHistory();

    useEffect(() => {
        async function fetchPost() {
            const posts = await postApi.getPosts();
            setPosts(posts);
        }

        fetchPost();
    }, []);

    function handleClick(postId) {
        console.log(postId);
        history.push(`/posts/${postId}`);
    }

    function handleClickReview(status_review) {
        console.log(status_review);
        /**
         * send request to change status review
         */
    }
    
        return (
            <div className="list-post__container">
                <h3 className="list-post__title">Danh sách bài viết</h3>
                <div className="list-post__inner">

                    <table className="post-table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" name="delete" /><i className="far fa-trash-alt"></i></th>
                                <th>Bài viết</th>
                                <th>Người tạo</th>
                                <th>Ngày đăng</th>
                                <th>Bình luận, báo cáo</th>
                                <th>Trạng thái duyệt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((post => (
                                <tr key={post.id}>
                                    <td><input type="checkbox" name="delete" /></td>
                                    <td>
                                        <Post id={post.id}
                                            title={post.title}
                                            image="/static/media/banner_2.f5a8d2b0.jpg"
                                            money={post.price}
                                            area={post.area}
                                            onPostClick={handleClick}/>
                                    </td>
                                    <td>{post.owner}</td>
                                    <td>{post.time_display} <br /> 07:54</td>
                                    <td>0</td>
                                    <td>
                                        <CheckReview initState={post.status_review} onClickReview={handleClickReview}/>
                                    </td>
                                </tr>)))
                            }
                            {/* <tr>
                                <td><input type="checkbox" name="delete" /></td>
                                <td>
                                    <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
                                        image="/static/media/banner_2.f5a8d2b0.jpg"
                                        money="3.500.000 đ"
                                        area="25 m2" />
                                </td>
                                <td>Trịnh Thị Thu Trang</td>
                                <td>12/11/2020 <br /> 18:30</td>
                                <td className="red">5</td>
                                <td><i className="far fa-check green review-icon"></i></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="delete" /></td>
                                <td>
                                    <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
                                        image="/static/media/banner_2.f5a8d2b0.jpg"
                                        money="3.500.000 đ"
                                        area="25 m2" />
                                </td>
                                <td>Trịnh Thị Thu Trang</td>
                                <td>10/12/2020 <br /> 07:54</td>
                                <td>0</td>
                                <td><i className="far fa-times red review-icon"></i></td>
                            </tr> */}
                        </tbody>

                    </table>
                </div>
            </div>
        )
}

export default ListPost;
import './list_post.scss';
import { Component } from 'react';

import Post from '../../../components/post/post_small/post_small';

class ListPost extends Component {
    render() {
        return (
            <div className="list-post__container">
                <h3 className="list-post__title">Danh sách bài viết</h3>
                <div className="list-post__inner">

                    <table className="post-table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" name="delete" /><i className="far fa-trash-alt"></i></th>
                                <th>Bài viết</th>
                                <th>Ngày đăng</th>
                                <th>Bình luận, báo cáo</th>
                                <th>Trạng thái duyệt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" name="delete" /></td>
                                <td>
                                    <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
                                        image="/static/media/banner_2.f5a8d2b0.jpg"
                                        money="3.500.000 đ"
                                        area="25 m2" />
                                </td>
                                <td>12/11/2020 <br /> 18:30</td>
                                <td className="red">5</td>
                                <td><i className="far fa-check green"></i></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="delete" /></td>
                                <td>
                                    <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
                                        image="/static/media/banner_2.f5a8d2b0.jpg"
                                        money="3.500.000 đ"
                                        area="25 m2" />
                                </td>
                                <td>10/12/2020 <br /> 07:54</td>
                                <td>0</td>
                                <td><i className="far fa-times red"></i></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}

export default ListPost;
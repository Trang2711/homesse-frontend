import { Link } from "react-router-dom";
import './left_nav.scss';
import {Component} from 'react';

class LeftNav extends Component {
    render() {
        return(
            <div className="left-nav-personal__container">
                <ul className="left-nav-personal__inner">
                    <li>
                        <Link to="/personal/info"><i className="far fa-info-square"></i>Thông tin cá nhân</Link>
                    </li>
                    <li>
                        <Link to="/personal/saved-post"><i className="fas fa-list-ul"></i>Danh sách đã lưu</Link>
                    </li>
                    <li>
                        <Link><i className="far fa-history"></i>Lịch sử hoạt động</Link>
                        <ul className="drop-menu">
                            <li><Link to="/personal/history/liked-post">Bài biết yêu thích</Link></li>
                            <li><Link to="/personal/history/post-commented">Bình luận</Link></li>
                            <li><Link to="/personal/history/post-reported">Báo cáo bài viết</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
export default LeftNav;
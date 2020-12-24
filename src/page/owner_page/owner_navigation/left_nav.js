import { Component } from 'react';
import { Link } from "react-router-dom";
import './left_nav.scss';

class LeftNav extends Component {
    render() {
        return(
            <div className="left-nav-personal__container">
                <ul className="left-nav-personal__inner">
                    <li>
                        <Link to="/owner/info"><i className="far fa-info-square"></i>Thông tin cá nhân</Link>
                    </li>
                    <li>
                        <Link to="/owner/add-post"><i class="far fa-file-plus"></i>Tạo bài viết mới</Link>
                    </li>
                    <li>
                        <Link><i className="far fa-history"></i>Bài viết đã tạo</Link>
                        <ul className="drop-menu">
                            <li><Link to="/owner/accept-post">Bài biết đã duyệt</Link></li>
                            <li><Link to="/owner/unaccept-post">Bài viết chưa duyệt</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LeftNav;
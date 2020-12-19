import { Component } from 'react';
import { Link } from "react-router-dom";
import './left_nav.scss';

class LeftNav extends Component {
    render() {
        return(
            <div className="left-nav-admin__container">
                <ul className="left-nav-admin__inner">
                    <li>
                        <Link to="/admin/list-post"><i className="fas fa-list-ul"></i>Danh sách bài viết</Link>
                    </li>
                    <li>
                        <Link><i class="far fa-chart-line"></i>Báo cáo</Link>
                        <ul className="drop-menu">
                            <li><Link to="/admin/report/post">Báo cáo theo bài viết</Link></li>
                            <li><Link to="/admin/report/time">Báo cáo theo thời gian</Link></li>
                            <li><Link to="/admin/report/position">Báo cáo theo địa điểm</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/admin/customer"><i class="far fa-user-friends"></i>Khách hàng</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LeftNav;
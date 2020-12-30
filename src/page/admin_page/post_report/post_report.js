import './post_report.scss';
import { Component } from 'react';

function PostReport() {
   
    const [postAccept, setPostAccept] = useState([]);
    const [postUnaccept, setPostUnaccept] = useState([]);
    const [postExpired, setPostExpired] = useState([]);


        return (
            <div className="post-report__container">
                <h3 className="post-report__title">Báo cáo theo bài viết</h3>
                <div className="post-report__inner">
                    <div className="box-report box-report__green ">
                        <div className="box-report_header">4 <br/>Bài viết được duyệt</div>
                        <div className="box-report_description">0 bị khóa</div>
                    </div>
                    <div className="box-report box-report__pink">
                        <div className="box-report_header">4 <br/>Bài viết được duyệt</div>
                        <div className="box-report_description">0 bị khóa</div>
                    </div>
                    <div className="box-report box-report__blue">
                        <div className="box-report_header">4 <br/>Bài viết được duyệt</div>
                        <div className="box-report_description">0 bị khóa</div>
                    </div>
                </div>
            </div>
        )
}

export default PostReport;
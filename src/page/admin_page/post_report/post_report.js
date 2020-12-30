import './post_report.scss';
import { useState, useEffect } from 'react';
import postApi from '../../../api/postApi';

function PostReport() {
   
    const [postAccept, setPostAccept] = useState([]);
    const [postUnaccept, setPostUnaccept] = useState([]);
    const [postExpired, setPostExpired] = useState([]);

    useEffect(() => {
        async function fetchAcountPosts() {
            const res = await postApi.getAcountPosts();
            console.log(res);
            setPostAccept(res.total_rooms_approve);
            setPostUnaccept(res.total_rooms_unapprove);
            setPostExpired(res.total_rooms_expired);
        }

        fetchAcountPosts();

    }, [])

        return (
            <div className="post-report__container">
                <h3 className="post-report__title">Báo cáo theo bài viết</h3>
                <div className="post-report__inner">
                    <div className="box-report box-report__green ">
                        <div className="box-report_header">{postAccept}<br/> Bài viết được duyệt</div>
                        {/* <div className="box-report_description">0 bị khóa</div> */}
                    </div>
                    <div className="box-report box-report__pink">
                        <div className="box-report_header">{postUnaccept}<br/> Bài viết bị khóat</div>
                        {/* <div className="box-report_description">0 bị khóa</div> */}
                    </div>
                    <div className="box-report box-report__blue">
                        <div className="box-report_header">{postExpired}<br/>Bài viết quá hạn</div>
                        {/* <div className="box-report_description">0 bị khóa</div> */}
                    </div>
                </div>
            </div>
        )
}

export default PostReport;
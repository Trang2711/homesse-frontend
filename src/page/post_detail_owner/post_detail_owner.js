import './post_detail_owner.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postApi from '../../api/postApi';
import Menu from '../../components/navigation/Menu';
import MenuLogin from '../../components/navigation/menu_login'
import Title from './title/title';
import InfoAuthor from './info_author/info_author';
import DescriptionDetail from './description_detail/desc_detail';
import Facility from './facilities/facilities';
import DescriptionExtra from './description_extra/description_extra';
import SliderImage from './image/slider_image';
import Comment from './comment/comment';
import Footer from '../../components/footer/footer';

function PostDetail(){
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    console.log(id);

    useEffect(() => {
        async function fetchPostDetail() {
            const res = await postApi.getPost(id);
            setInfo(res[0]);
            console.log(res);
        }

        fetchPostDetail();
    }, []);
    return(
        <div className="postdetail__page">
            <MenuLogin/>
            <div className="postdetail-buffer"></div>
            <div className="postdetail__container">
                <div className="postdetail__left">
                    <div className="postdetail__component"><Title data={info} /></div>
                    <div className="postdetail__component"><SliderImage data={info} /></div>
                    <div className="postdetail__component"><DescriptionDetail data={info} /></div>
                    <div className="postdetail__component"><Facility data={info} /></div>
                    <div className="postdetail__component"><DescriptionExtra data={info} /></div>
                    <div className="postdetail__component"><Comment data={info} /></div>
                </div>
                <div className="postdetail__right">
                    <InfoAuthor data={info}/>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default PostDetail;
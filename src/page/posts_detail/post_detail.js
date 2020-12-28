import './post_detail.scss';
import React from 'react';

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
    return(
        <div className="postdetail__page">
            <MenuLogin userName="Thảo Vũ" />
            <div className="postdetail-buffer"></div>
            <div className="postdetail__container">
                <div className="postdetail__left">
                    <div className="postdetail__component"><Title/></div>
                    <div className="postdetail__component"><SliderImage/></div>
                    <div className="postdetail__component"><DescriptionDetail/></div>
                    <div className="postdetail__component"><Facility/></div>
                    <div className="postdetail__component"><DescriptionExtra/></div>
                    <div className="postdetail__component"><Comment/></div>
                </div>
                <div className="postdetail__right">
                    <InfoAuthor/>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default PostDetail;
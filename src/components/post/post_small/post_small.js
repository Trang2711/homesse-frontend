import './post_small.scss';
import area_icon from '../../../images/area.svg';
import { Component } from 'react';

class Post extends Component {
    render() {
        const { id, title, image, money, area, onPostClick } = this.props;
        var sectionStyle = {
            backgroundImage: `url(${image})`
        };

        function handleClick() {
            if(onPostClick){
                onPostClick(id);
            }
        }

        return (
            <div className="post-small" onClick={() => handleClick()}>
                <div className="post__image" style={sectionStyle}>
                </div>
                <div className="post__content">
                    <div className="post__title">{title}</div>
                    <div className="post__description">
                        <div className="post__description--item">
                            <i className="post__description--icon far fa-dollar-sign" ></i>
                            <span>{money}</span>
                        </div>
                        <div className="post__description--item">
                            <img className="post__description--icon" src={area_icon} alt=""></img>
                            <span>{area}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;
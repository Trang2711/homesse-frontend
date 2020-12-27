import './post_big.scss';
import area_icon from '../../../images/area.svg';

function Post(props) {

        const { id, title, image, intro, money, area, onPostClick } = props;

        var sectionStyle = {
            backgroundImage: `url(${image})`
        };

        function handleClick() {
            if(onPostClick){
                onPostClick(id);
                console.log("hello");
            }
        }

        return (
            <div className="post" onClick={() => handleClick()}>
                <div className="post__image" style={sectionStyle}>
                </div>
                <div className="post__content">
                    <div className="post__title">{title}</div>
                    <div className="post__intro">{intro}</div>
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

export default Post;
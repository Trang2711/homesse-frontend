import './post_big.scss';
import area_icon from '../../../images/area.svg';

function Post(props) {

        const { id, title, image, intro, money, area, time, onPostClick, onPostDelete, onPostEdit } = props;
        console.log(props.time);

        var sectionStyle = {
            backgroundImage: `url(${image})`
        };

        function handleClick() {
            if(!onPostClick) return;
            onPostClick(id);
        }

        function handleDeletePost() {
            let deleted = window.confirm("Bạn chắc chắn muốn xóa bài viết?");
            if (!deleted && !onPostDelete)  return;
            onPostDelete(id);
        }

        function handleEditPost() {
            if (!onPostEdit) return;
            onPostEdit(id);
        }

        return (
            <div className="post">
                <div className="post__image" style={sectionStyle}>
                    { onPostEdit && <i class="fas fa-pencil icon-btn" onClick={handleEditPost}></i>}
                    { onPostDelete && <i className="fas fa-times-circle icon-btn"  onClick={handleDeletePost}></i> }
                </div>
                <div className="post__content" onClick={() => handleClick()}>
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
                        <div className="post__description--item last">
                            <i class="far fa-clock"></i>
                            <span>{time}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Post;
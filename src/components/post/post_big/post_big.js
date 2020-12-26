import './post_big.scss';
import area_icon from '../../../images/area.svg';

function Post(props) {

        const { id, title, image, intro, money, area, onPostClick, onPostDelete, onPostEdit } = props;

        var sectionStyle = {
            backgroundImage: `url(${image})`
        };

        function handleClick() {
            if(onPostClick){
                onPostClick(id);
            }
        }

        function handleDeletePost() {
            let deleted = window.confirm("Bạn chắc chắn muốn xóa bài viết?");
            if (deleted) {
                onPostDelete(id);
            }
        }

        function handleEditPost() {
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
                    </div>
                </div>
            </div>
        )
}

export default Post;
import './accept_post.scss';
import { useHistory } from "react-router-dom";

import Post from '../../../components/post/post_big/post_big';

function AcceptPost (props) {
    const {posts} = props;
    const history = useHistory();

    function handleClickPost(postId) {
        history.push(`/boarding/${postId}`);
      }
      
        return (
            <div className="list-post__container">
                <h3 className="list-post__title">Bài viết đã được duyệt</h3>
                <div className="list-post__inner">
                    {
                        posts.map((post) => {
                            return (
                              <Post title={post.title}
                                key={post.id}
                                id={post.id}
                                image="/static/media/banner_2.f5a8d2b0.jpg"
                                intro={post.description}
                                money={post.price}
                                area={post.area}
                                onPostClick={handleClickPost}
                              />
                            )
                          })
                    }
                </div>
            </div>
        )
}

export default AcceptPost;
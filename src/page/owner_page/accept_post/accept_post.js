import './accept_post.scss';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import postApi from '../../../api/postApi';
import { useSelector } from 'react-redux';

import Post from '../../../components/post/post_big/post_big';

function AcceptPost () {
  const [posts, setPost] = useState([]);
  const userId = useSelector(state => state.user.id);

  useEffect(() => {
    async function fetchPosts() {
        try {
            const params = { user_id: userId, status_review: 1 };
            const res = await postApi.getPosts(params);

            setPost(res);
        } catch (error) {
            console.log("Error when fetching userInfo: " + error);
        }
    }
    fetchPosts(userId);
}, []);

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
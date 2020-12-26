import './unaccept_post.scss';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import postApi from '../../../api/postApi';
import { useSelector } from 'react-redux';
// import store from '../../../store';

import Post from '../../../components/post/post_big/post_big';
// import CreatePost from '../create_post/create_post';
import EditPostForm from '../edit_post/edit_post';

function UnacceptPost(props) {

    const [posts, setPost] = useState([]);
    const dialog = useRef(null);
    const [postActive, setPostActive] = useState();

    const userId = useSelector(state => state.user.id);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const params = { user_id: userId, status_review: 0 };
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

    function deletePost(postId) {
        console.log(postId);
        let newPosts = posts.filter((post) => {
            return post.id !== postId;
        });

        /**
         * send a request to delete post with postId
         */
        setPost(newPosts);
    }

    function editPost(postId) {
        dialog.current.showModal();
        console.log(postId);
        setPostActive(postId);
    }

    function handleCloseForm() {
        console.log("close");
        dialog.current.close();
    }

    return (
        <div className="list-post__container">
            <h3 className="list-post__title">Bài viết chưa được duyệt</h3>
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
                                onPostDelete={deletePost}
                                onPostEdit={editPost}
                            />
                        )
                    })
                }
            </div>

            <dialog className="edit-post scrollbar" ref={dialog}>
                <EditPostForm postId={postActive} onFormClose={handleCloseForm}/>
            </dialog>
        </div>
    )
}

export default UnacceptPost;
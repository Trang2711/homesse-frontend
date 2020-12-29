import AdvanceSearch from '../../components/advance_search/search';
import Post from '../../components/post/post_big/post_big';
import MenuLogin from '../../components/navigation/menu_login';
import Footer from '../../components/footer/footer';
import { useSelector, useState } from 'react-redux';
import './search.scss';
import postApi from '../../api/postApi';
import { useHistory } from "react-router-dom";

function SearchPage() {
    const searchData = useSelector(state => state.searchData);
    console.log(searchData);

    const [posts, setPosts] = useState([]);

    const history = useHistory();

    function handleSubmitToServer(data) {
        // console.log(data);
        async function fetchPosts(data) {
            const res = await postApi.searchPost(data);
            console.log(res);
            setPosts(res);
        }
        fetchPosts(data);
    }

    function handleClickPost(postId) {
        history.push(`/posts/${postId}`);
    }

    return (
        <div className="search-page">
            <MenuLogin userName="Trang Trịnh" />
            <div className="buffer"></div>
            <div className="search-page__container">
                <div className="result-search__container">
                    <h1 className="result__title">Kết quả tìm kiếm</h1>
                    <hr />
                    <div className="result-search_inner">
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
                                        time={post.created_at}
                                        onPostClick={() => handleClickPost(post.id)}
                                    />
                                )
                            })
                        }
                    </div>

                </div>
                <AdvanceSearch handleSubmitData={handleSubmitToServer} />
            </div>
            <Footer />
        </div>
    )
}

export default SearchPage;
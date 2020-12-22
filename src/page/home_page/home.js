import './home.scss';
import Menu from '../../components/navigation/Menu';
import BasicSearch from '../../components/basic_search/search';
import Features from '../../components/features/features';
import Post from '../../components/post/post_big/post_big';
import AboutUs from '../../components/about_us/about_us';
import Footer from '../../components/footer/footer';

import React, { useEffect, useState } from "react";
import postApi from '../../api/postApi';
import { useHistory } from "react-router-dom";

function Home() {

  const [postList, setPostList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchPostList() {
      try {
        const responce = await postApi.getLatestPost();
        setPostList(responce);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPostList();
  }, []);

  function handleClickPost(postId) {
    history.push(`/boarding/${postId}`);
  }

  return (
    <div className="home-page">
      <Menu />
      <div className="home-buffer"></div>
      <BasicSearch />
      <div className="home-page__container">
        <Features />
        <h1 className="web-header"><span className="blue">LATEST </span> POSTS </h1>
        <hr />
        <div className="posts__container">
          {/* <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
            image="/static/media/banner_2.f5a8d2b0.jpg"
            intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
            money="3.500.000 đ"
            area="25 m2" /> */}
          {
            postList.map((post) => {
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
        <AboutUs />
      </div>

      <Footer />
    </div>
  );
}

export default Home;

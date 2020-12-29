import './home.scss';
import Menu from '../../components/navigation/Menu';
import MenuLogin from '../../components/navigation/menu_login';
import BasicSearch from '../../components/basic_search/search';
import Features from '../../components/features/features';
import Post from '../../components/post/post_big/post_big';
import AboutUs from '../../components/about_us/about_us';
import Footer from '../../components/footer/footer';
import Chat from '../../components/chat/chat';

import React, { useEffect, useState } from "react";
import postApi from '../../api/postApi';
import { useHistory } from "react-router-dom";

function Home() {
  const token = localStorage.getItem("token");

  let LoggedIn = true;
  if (token == null) {
    LoggedIn = false;
  }

  const [postList, setPostList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchPostList() {
      try {
        const responce = await postApi.getLatestPost();
        console.log(responce[0]);
        setPostList(responce[0]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPostList();
  }, []);

  function handleClickPost(postId) {
    history.push(`/posts/${postId}`);
  }

  function handleRedirect() {
    history.push('/search');
  }

  return (
    <div className="home-page">
      { (LoggedIn) ? <MenuLogin /> : <Menu />}
      <div className="home-buffer"></div>
      {/* <BasicSearch onRedirect={handleRedirect} /> */}
      <BasicSearch/>
      <div className="home-page__container">
        <Features />
        <h1 className="web-header"><span className="blue">LATEST </span> POSTS </h1>
        <hr />
        <div className="posts__container">
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
                  time={post.created_at}
                  onPostClick={() => handleClickPost(post.id)}
                />
              )
            })
          }
        </div>
        <AboutUs />
        {/* <Chat/> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;

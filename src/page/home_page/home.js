import './home.scss';
import Menu from '../../components/navigation/Menu';
import BasicSearch from '../../components/basic_search/search';
import Features from '../../components/features/features';
import Post from '../../components/post/post_big/post_big';
import AboutUs from '../../components/about_us/about_us';
import Footer from '../../components/footer/footer';

import React, { Component } from "react";
import MenuLogin from '../../components/navigation/menu_login';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home (){
  const token = localStorage.getItem("token");

        let LoggedIn = true;
        if(token == null){
            LoggedIn = false;
        }
  //localStorage.removeItem("token");

  
  // const [userId, setUserId] = useState("123");
  // const [listIteam, setListItem] = useState({"name": "trang", "age": "18"});
  // function handleClick(newId, newAge){
  //   // userId = newI
  //   setUserId(newId);
  //   const newItem = {...listIteam, "color": newAge};
  //   setListItem(newItem);

  // }
  // // const [state, setstate] = useState(initialState);

  // useEffect(() => {
  //   async function fetchPostList() {
  //     try {
  //       const responce = await postApi.getLatestPost();
  //       setListItem(responce);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchPostList();
  // }, []);

  
    return (
      <div className="home-page">
        { (LoggedIn) ? (<MenuLogin userName="Trung Thức"/>) : (<Menu/>)}
        {/* <Menu /> */}
        <div className="home-buffer"></div>
        <BasicSearch />
        <div className="home-page__container">
          <Features />
          <h1 className="web-header"><span className="blue">LATEST </span> POSTS </h1>
          <hr />
          <div className="posts__container">
            <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
              image="/static/media/banner_2.f5a8d2b0.jpg"
              intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
              money="3.500.000 đ"
              area="25 m2" />
            <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
              image="/static/media/banner_2.f5a8d2b0.jpg"
              intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
              money="3.500.000 đ"
              area="25 m2" />
            <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
              image="/static/media/banner_2.f5a8d2b0.jpg"
              intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
              money="3.500.000 đ"
              area="25 m2" />
            <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
              image="/static/media/banner_2.f5a8d2b0.jpg"
              intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
              money="3.500.000 đ"
              area="25 m2" />
            <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
              image="/static/media/banner_2.f5a8d2b0.jpg"
              intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
              money="3.500.000 đ"
              area="25 m2" />
            <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
              image="/static/media/banner_2.f5a8d2b0.jpg"
              intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
              money="3.500.000 đ"
              area="25 m2" />
          </div>
          <AboutUs />
        </div>
  
        <Footer />
      </div>
    );
}

export default Home;

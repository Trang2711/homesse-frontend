import './home.scss';
import Menu from '../navigation/Menu';
import BasicSearch from '../basic_search/search';
import Features from '../features/features';
import Post from '../post/post';
import AboutUs from '../about_us/about_us';
import Footer from '../footer/footer';

import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <Menu />
      <BasicSearch />
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
      <Footer />
    </div>
  );
}

export default Home;

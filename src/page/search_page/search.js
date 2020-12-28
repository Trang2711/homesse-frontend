import { Component } from 'react';
import AdvanceSearch from '../../components/advance_search/search';
import Post from '../../components/post/post_big/post_big';
import MenuLogin from '../../components/navigation/menu_login';
import Footer from '../../components/footer/footer';
import {useSelector} from 'react-redux';
import './search.scss';

function SearchPage() {
    const searchData = useSelector(state => state.searchData);
    console.log(searchData);
    return (
        <div className="search-page">
            <MenuLogin userName="Trang Trịnh" />
            <div className="buffer"></div>
            <div className="search-page__container">
                <div className="result-search__container">
                    <h1 className="result__title">Kết quả tìm kiếm</h1>
                    <hr />
                    <div className="result-search_inner">
                        <Post title="Phòng trọ gần đại học Công Nghệ - ĐHQGHN"
                            image="/static/media/banner_2.f5a8d2b0.jpg"
                            intro="Đầy đủ tiện ích: điều hòa, nóng lạnh, máy giặt..."
                            money="3.500.000 đ"
                            area="25 m2"
                        />
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

                </div>
                <AdvanceSearch />
            </div>
            <Footer />
        </div>
    )
}

export default SearchPage;
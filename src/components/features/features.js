import './features.scss';
import newPost from '../../images/icons8-new-post-96.png';
import service from '../../images/icons8-request-service-96.png';
import search from '../../images/search.png';
import hexagon from '../../images/hexagon.png';
import trust from '../../images/icons8-trust-96.png';
function Features() {
  return (
    <div className="features_container">
      <div className="features-left">
        <h1 className="features__headline">CHÚNG TÔI ĐEM ĐẾN <br></br> <span className="features__headline--big">NHỮNG ĐIỀU <span className="blue">TỐT NHẤT</span></span></h1>
        <p className="features__intro">Bắt đầu một ngày đẹp trời với một nơi ở mới. Chúng tôi sẽ giúp bạn tìm thấy ngôi nhà mong muốn một cách nhanh nhất</p>
        <div className="features-item-list">
          <div className="feature-item">
            <img className="feature-item__icon" src={search} alt=""></img>
            <div className="feature-item__content">
              <div className="feature-item__headline">TÌM KIẾM NHANH</div>
              <div className="feature-item__intro">Cung cấp công cụ tìm kiếm nhanh các thuộc tính của ngôi nhà</div>
            </div>
          </div>
          <div className="feature-item">
            <img className="feature-item__icon" src={newPost} alt=""></img>
            <div className="feature-item__content">
              <div className="feature-item__headline">LIÊN TỤC CẬP NHẬT</div>
              <div className="feature-item__intro">Cập nhật nhanh chóng các bài viết mới và trạng thái bài viết cũ</div>
            </div>
          </div>
          <div className="feature-item">
            <img className="feature-item__icon" src={trust} alt=""></img>
            <div className="feature-item__content">
              <div className="feature-item__headline">CÔNG CỤ TIN CẬY</div>
              <div className="feature-item__intro">Thông tin chủ trọ và bài viết luôn được kiểm duyệt trước khi cập nhật</div>
            </div>
          </div>
          <div className="feature-item">
            <img className="feature-item__icon" src={service} alt=""></img>
            <div className="feature-item__content">
              <div className="feature-item__headline">MANG LẠI NHIỀU TIỆN ÍCH</div>
              <div className="feature-item__intro">Tìm kiếm chỉ trong vài giây mà không phải lo gặp vấn đề như các tìm trọ truyền thống</div>
            </div>
          </div>
        </div>
      </div>
      <div className="features-right">
        <img src={hexagon} alt=""></img>
      </div>
    </div>
  );
}

export default Features;

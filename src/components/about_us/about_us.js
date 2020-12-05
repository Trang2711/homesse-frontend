// import image from '../../images/banner_2.jpg';
import './about_us.scss';

function AboutUs() {
    return (
        <div className="about-us__container">
            <div className="about-us__content">
                <div className="about-us__header">CÔNG TY <span className="blue">HOMESSE</span></div>
                <div className="about-us__description">
                    <p> Chỉ mới bắt đầu được thành lập và đi vào hoạt động từ tháng 5/2017 nhưng Homesse
                    đã và đang là một trong những trang thông tin bất động sản có tốc độ phát triển nhanh nhất.</p>
                    <p> Homesse.vn đang từng bước chuyển mình, thay đổi và tạo ra trải nghiệm người dùng tốt nhất.</p>
                </div>
            </div>
            <div className="about-us__image trapezoid"></div>
        </div>
    )
}

export default AboutUs;
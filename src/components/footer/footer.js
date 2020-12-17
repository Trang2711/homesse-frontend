import './footer.scss'

function Footer() {
    return (
        <div id="contactUs" className="footer">
            <span className="footer__header">LIÊN HỆ VỚI CHÚNG TÔI</span>
            <div className="footer__container">
                <div className="footer-contact__inner place">
                    <div className="footer-contact__icon">
                        <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="footer-contact__description">
                        Đại học Công Nghệ - ĐHQG Hà Nội,
                        144 Xuân Thủy, Cầu Giấy, Hà Nội
                    </div>
                </div>

                <div className="footer-contact__inner phone">
                    <div className="footer-contact__icon">
                        <i className="fal fa-phone-alt"></i>
                    </div>
                    <div className="footer-contact__description">
                        09 876 543 210 <br />
                        033 987 654 32
                    </div>
                </div>

                <div className="footer-contact__inner email">
                    <div className="footer-contact__icon">
                        <i className="fal fa-envelope"></i>
                    </div>
                    <div className="footer-contact__description">
                        daihocCongNghe@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
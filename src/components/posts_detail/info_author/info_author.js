import './info_author.scss';
import address from '../../../images/placeholder.png';
import contact from '../../../images/phone-call.png';
import mail from '../../../images/email.png';
import avatar from '../../../images/avatar1.jpg'


function InfoAuthor(){
    return(
        <div className="info__author__container">
            <div className="info__author__inner">
                <h3 className="info__author">Thông tin tác giả</h3>
                <div className="info__author__ava-name">
                    <img src={avatar} className="info__author__avatar" alt=""/>
                    <p className="info__author__name">Vũ Thanh Thảo</p>
                </div>
                <div className="info__address">
                    <img src={address} className="info__author__address__icon" alt=""/>
                    <p className="info__author__address">302 Cầu Giấy, Hà Nội</p>
                </div>
                <div className="info__contact">
                    <img src={contact} className="info__author__contact__icon" alt=""/>
                    <p className="info__author__contact">0982 344 444</p>
                </div>
                <div className="info__mail">
                    <img src={mail} className="info__author__mail__icon" alt=""/>
                    <p className="info__author__mail">thanhthao@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
export default InfoAuthor;
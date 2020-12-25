import './image.scss';
import imageRoom from '../../../images/background_0.jpg';
import btnLeft from '../../../images/left-arrow.png';
import btnRight from '../../../images/right-arrow.png';

function Image(){
    return(
        <div className="image__container">
            <h3 className="image__title">Hình ảnh phòng</h3>
            <div className="underlined__image"></div>
            <div className="image__inner">
                <div className="image__main">
                    <img src={imageRoom} id="image__main" alt=""/>
                    <img src={btnLeft} id="image__btn_left" alt=""/>
                    <img src={btnRight} id="image__btn_right" alt=""/>
                </div>
                <div className="image__extra">
                    <div className="image__extra__detail">
                        <img src={imageRoom} id="image__detail" alt=""/>
                    </div>
                    <div className="image__extra__detail">
                        <img src={imageRoom} className="image__detail" alt=""/>
                    </div>
                    <div className="image__extra__detail">
                        <img src={imageRoom} className="image__detail" alt=""/>
                    </div>
                    <div className="image__extra__detail">
                        <img src={imageRoom} className="image__detail" alt=""/>
                    </div>
                    <div className="image__extra__detail">
                        <img src={imageRoom} className="image__detail" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Image;
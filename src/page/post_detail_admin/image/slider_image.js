import React, { useState } from "react";
import "./slider_image.scss";
import "./image.scss";
import classNames from "classnames";
import background_image from "../../../images/background_0.jpg";
import background1 from "../../../images/banner_2.jpg";
import background2 from "../../../images/banner_3.jpg";
import btnLeft from "../../../images/left-arrow.png";
import btnRight from "../../../images/right-arrow.png";
import imageRoom from "../../../images/background_0.jpg";

function Slider() {
  const slides = [background_image, background1, background2, background_image, background1];
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    let slide = activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1;
    setActiveSlide(slide);
  };

  const nextSlide = () => {
    let slide = activeSlide + 1 < slides.length ? activeSlide + 1 : 0;
    setActiveSlide(slide);
  };

  return (
    <div>
      <div className="image__container">
        <h3 className="image__title">Hình ảnh phòng</h3>
        <div className="underlined__image"></div>
        <div className="image__inner">
          <div className="image__main">
            <div className="slideshow__container">
              {slides.map((slide, index) => {
                return (
                  <div
                    key={"slider-" + index}
                    className={classNames("mySlides fade", {
                      "display-block": activeSlide === index,
                    })}
                  >
                    <div
                      style={{
                        width: "760px",
                        height: "380px",
                        backgroundImage: "url(" + slide + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </div>
                );
              })}
              <span className="prev" onClick={prevSlide}>
                {/* &#10094; */}
                <img src={btnLeft} id="image__btn_left" alt="" />
              </span>
              <span className="next" onClick={nextSlide}>
                {/* &#10095; */}
                <img src={btnRight} id="image__btn_right" alt="" />
              </span>
            </div>
          </div>
          <div className="image__extra">
            {slides.map((slide, index) => {
              return (
                <div className="image__extra__detail"
                    style={{
                        width: "150px",
                        height: "80px",
                        // marginRight: "10px",
                        // marginLeft: "10px",
                        margin: "auto",
                        backgroundImage: "url(" + slide + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        border: (activeSlide === index) ? "solid red 2px" : null
                    }}
                />
                
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

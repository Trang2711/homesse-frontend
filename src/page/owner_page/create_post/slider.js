import React, { useState, useEffect, useRef } from 'react';
// import './slider.scss';
import { css, cx } from '@emotion/css';
import SliderContent from './slider_content';
import Slide from './slide';
// import Arrow from './Arrow'
// import Dots from './Dots'

const getWidth = () => 600;

/**
 * @function Slider
 */
const Slider = props => {
  const { slides } = props

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { activeSlide, translate, _slides, transition } = state

  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()
  const sliderRef = useRef()
  return (
    <div css={SliderCSS} ref={sliderRef}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide width={getWidth()} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>

      {/* <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} /> */}

      {/* <Dots slides={slides} activeSlide={activeSlide} /> */}
    </div>
  )
}

const SliderCSS = css`
  position: relative;
  height: inherit;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`

export default Slider;
import React from 'react'
import { css, cx } from '@emotion/css';

const SliderContent = props => (
  <div
    css={css`
      transform: translateX(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      height: inherit;
      width: ${props.width}px;
      display: flex;
    `}
  >
    {props.children}
  </div>
)

export default SliderContent;
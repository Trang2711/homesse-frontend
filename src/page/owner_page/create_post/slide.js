import React, { memo } from 'react';
import { css, cx } from '@emotion/css';

const Slide = ({ content, width }) => {
    console.log(content);
  return (
    <div
      css={css`
        height: inherit;
        width: ${width}px;
        background-image: url('${content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    />
  )
}

export default memo(Slide)
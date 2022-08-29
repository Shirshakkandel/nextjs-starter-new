import { css } from '@emotion/css';
import React, { useState } from 'react';

import useIntersectionRatio from '../../utils/Hook/useIntersectionRatio';

const Divider = () => {
  const { ref, intersectionRatio } = useIntersectionRatio();
  return (
    <div ref={ref} className="w-full h-[70px] relative">
      <div
        className={`mt-[30px]  line transition duration-1000 ${
          intersectionRatio >= 0.9
            ? 'translate-x-[100%]'
            : intersectionRatio >= 0.7
            ? 'translate-x-[70%]'
            : intersectionRatio >= 0.4
            ? 'translate-x-[40%]'
            : intersectionRatio >= 0.2
            ? 'transalte-x-[20%]'
            : intersectionRatio <= 0.1 && 'translate-x-[0%]'
        } ${css`
          position: static;
          width: auto;
          transition: all 1 ease-in;
          height: 1px;
          min-width: 100px;
          max-width: 50%;
          border: 0px none transparent;
          background-image: linear-gradient(90deg, transparent, #3183ff 15%, #3183ff 85%, transparent);
        `}`}
      ></div>
    </div>
  );
};

export default Divider;

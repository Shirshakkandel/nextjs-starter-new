import React from 'react';
import BG from './img/herobackground.png';
import { css } from '@emotion/css';
import { websiteDetails } from '../../../utils/data/websiteData';
import { Flex, FlexItem, FlexWrap } from '../../../utils/styledComponents';
import useWindowSize from '../../../utils/Hook/useWindowSize';

const Hero = () => {
  const { width } = useWindowSize();
  // console.log(BG.src);
  return (
    <div
      id="Header"
      className={`header min-h-[90vh] bg-coover bg-center ${css`
        background-position: 0px 0px, 0px 0px, 50% ${width < 500 ? '30%' : '50%'};
        background-size: auto, auto, ${width < 400 ? 'cover' : 'cover'};
        background-image: linear-gradient(180deg, #000, transparent 20%), linear-gradient(0deg, #000, transparent 55%), url(${BG.src});
        background-repeat: repeat, repeat, no-repeat;
      `}`}
    >
      {/* background-position: 0px 0px, 0px 0px, 50% 30%;
    background-size: auto, auto, auto 30em;
    background-repeat: repeat, repeat, no-repeat; */}

      <FlexWrap className="flex flex-row section-wrapper  flex-wrap items-end text-white min-h-[80vh]  lg:min-h-[85vh] gap-y-4  pb-2  justify-around">
        <FlexItem className="left-hero basis-[400px] flex-1 ">
          <div className="text-white large hero font-neuro text-[55px] leading-[1em] ">
            <span
              className={`brand-span ${css`
                background-image: linear-gradient(135deg, #3183ff, #0f4aa4);
                color: #3183ff;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              `}`}
            >
              {websiteDetails.name}
              <br />‍
            </span>
            Writing history
            <br />
            side by side
          </div>
        </FlexItem>

        <FlexItem className="right-hero basis-[300px] flex-1 text-text font-monts">
          <p className="paragraph hero">{websiteDetails.description}</p>
        </FlexItem>
      </FlexWrap>
    </div>
  );
};

export default Hero;

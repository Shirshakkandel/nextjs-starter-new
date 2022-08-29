import React from 'react';
import useIntersectionRatio from '../../../utils/Hook/useIntersectionRatio';

const TextSlider = () => {
  const { ref, intersectionRatio: iR } = useIntersectionRatio();
  return (
    <section ref={ref} className="text-center text-white section-wrapper heading-4 non-mobile">
      {/* <Divider /> */}
      <h2
        className={`transition duration-1000 ease-linear ${
          iR <= 0.1 ? 'translate-x-[-100%]' : iR <= 0.5 ? 'translate-x-[-40%]' : iR <= 0.8 ? 'translate-x-[-20%]' : iR === 1 && 'translate-x-[0%]'
        }`}
      >
        Our project : create the first collaborative manga!
      </h2>
      <h2
        className={`transition duration-1000 ease-linear ${
          iR <= 0.1 ? 'translate-x-[100%]' : iR <= 0.5 ? 'translate-x-[40%]' : iR <= 0.8 ? 'translate-x-[20%]' : iR === 1 && 'translate-x-[0%]'
        }`}
      >
        We plan to create the future best seller manga
      </h2>
    </section>
  );
};

export default TextSlider;

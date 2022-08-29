import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
const useIntersectionRatio = () => {
  const [intersectionRatio, setIntersectionRatio] = useState(null);
  const { inView, entry, ref } = useInView({
    threshold: [0.2, 0.4, 0.6, 0.8, 1],
  });
  useEffect(() => {
    if (entry?.intersectionRatio) {
      setIntersectionRatio(entry.intersectionRatio);
    }
  }, [entry]);

  return { inView, ref, intersectionRatio };
};

export default useIntersectionRatio;

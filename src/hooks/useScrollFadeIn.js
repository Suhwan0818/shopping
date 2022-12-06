import {useCallback, useRef} from 'react';

const useScrollFadeIn = () => {
  const dom = useRef();

  const handleScroll = useCallback(() => {
    const {current} = dom;
    const currentScrollPosition = window.pageYOffset;
    const currentDomScrollPosition = currentScrollPosition;
  });

  return {
    ref: dom,
  };
};

export default useScrollFadeIn;

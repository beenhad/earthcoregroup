import { gsap } from 'gsap';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import useHeaderHeight from './useHeaderHeight';
import usePageTransition from './usePageTransition';

const useScrollToSection = () => {
  const router = useRouter();
  const { show } = usePageTransition();
  const { headerHeight } = useHeaderHeight();

  const scrollHandler = useCallback(
    (path?: string) => {
      const hash = (path || router.asPath).split('#')[1];

      const dom = document.querySelector(`[data-id="${hash}"]`);
      if (!dom || typeof window === 'undefined') return;

      gsap.to(window, {
        duration: 1,
        ease: 'linear',
        scrollTo: {
          y: dom,
          offsetY: headerHeight + 20,
        },
      });
    },
    [headerHeight, router.asPath],
  );

  useEffect(() => {
    router.events.on('hashChangeComplete', scrollHandler);

    return () => {
      router.events.off('hashChangeComplete', scrollHandler);
    };
  }, [router.events, scrollHandler]);

  useEffect(() => {
    if (show || !headerHeight) return;

    setTimeout(() => {
      scrollHandler();
    }, 600);
  }, [headerHeight, scrollHandler, show]);

  return null;
};

export default useScrollToSection;

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
      dom?.scrollIntoView({
        behavior: 'smooth',
      });
    },
    [router.asPath],
  );

  useEffect(() => {
    router.events.on('hashChangeComplete', scrollHandler);

    return () => {
      router.events.off('hashChangeComplete', scrollHandler);
    };
  }, [router.events, scrollHandler]);

  useEffect(() => {
    if (show || !headerHeight) return;

    scrollHandler();
  }, [headerHeight, scrollHandler, show]);

  return null;
};

export default useScrollToSection;

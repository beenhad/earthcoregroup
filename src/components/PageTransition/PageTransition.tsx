import { MobileHeaderTop } from '@components/MobileHeader';
import { classes } from '@config/constants';
import useMobileSidebar from '@hooks/useMobileSidebar';
import usePageTransition from '@hooks/usePageTransition';
import useWindowWidtH from '@hooks/useWindowWidth';
import { cx } from '@utils';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PageTransition = () => {
  const windowWidth = useWindowWidtH();
  const { isClosedFully } = useMobileSidebar();
  const { show, setShow, offTransition } = usePageTransition();
  const router = useRouter();

  const isShow = show;

  useEffect(() => {
    const onStart = (currentPath: any) => {
      if (currentPath === router.pathname) return;
      setShow(true);
    };
    const onEnd = (currentPath: any) => {
      let timeout: any;
      timeout = setTimeout(() => {
        offTransition();
        clearTimeout(timeout);
      }, 2000);
    };

    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onEnd);

    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onEnd);
    };
  }, [offTransition, router.events, router.pathname, setShow]);

  return (
    <div
      className={cx(
        'fixed overflow-hidden z-[999999999] bg-body-gray',
        classes.pageTransitionWrapper,
        isShow
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none duration-500',
      )}
    >
      <div className="absolute top-0 left-0 w-full lg:hidden">
        <MobileHeaderTop />
      </div>
      <div
        style={{
          backgroundImage: 'url("/img/body-bg-block.png")',
          backgroundSize: '100px 100px',
          backgroundPosition: 'top top',
        }}
        className={cx(
          'absolute top-0 left-0 w-full h-full duration-200',
          isShow ? 'opacity-30 delay-200' : 'opacity-0',
        )}
      ></div>

      <div className="absolute top-0 left-0  w-full h-full flex flex-wrap gap-px p-px">
        {[...new Array(windowWidth > 1024 ? 150 : 60).keys()].map((e) => (
          <div
            id={`preloader_${e}`}
            className="w-[100px] h-[100px] shrink-0 opacity-0 bg-white flex justify-center items-center dddd"
            key={e}
          >
            {/* {e + 1} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageTransition;

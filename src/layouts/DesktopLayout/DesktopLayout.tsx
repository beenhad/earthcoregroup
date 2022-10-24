import DesktopSidebar from '@components/DesktopSidebar';
import MobileHeader from '@components/MobileHeader';
import PageTransition from '@components/PageTransition';
import ScrollToTopButton from '@components/ScrollToTopButton';
import { classes } from '@config/constants';
import { OnlyChildren } from '@config/types';
import { cx } from '@utils';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { use100vh } from 'react-div-100vh';

const DesktopHeader = dynamic(() => import('@components/DesktopHeader'));

const DesktopLayout = ({ children }: OnlyChildren) => {
  const screenHeight = use100vh();
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  return (
    <>
      <div>
        <DesktopSidebar />
        <div className={cx(classes.layoutWrapper)}>
          <div
            style={{ minHeight: screenHeight || 0 }}
            className="overflow-y-auto relative flex flex-col"
          >
            <div
              style={{
                backgroundImage: 'url("/img/body-bg-block.png")',
                backgroundSize: '100px 100px',
                backgroundPosition: 'top top',
              }}
              className="absolute h-full w-full top-0 left-0 z-[1] pointer-events-none overflow-hidden bg-repeat"
            />

            <MobileHeader />
            <div
              className={cx(
                !isHomePage && 'lg:pl-8',
                'grow relative flex flex-col',
              )}
            >
              {!isHomePage && <DesktopHeader />}
              {children}
            </div>
          </div>
        </div>
      </div>
      {!isHomePage && <ScrollToTopButton />}
      <PageTransition />
    </>
  );
};

export default DesktopLayout;

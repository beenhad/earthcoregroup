import { CommonPageLayoutProps } from '@config/types';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const CommonPageLayout = ({
  bannerImgSrc,
  pageTitle,
  children,
}: CommonPageLayoutProps) => {
  const pageTitleRef = useRef<HTMLHeadingElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(pageTitleRef.current, {
      scrollTrigger: {
        trigger: wrapperRef.current!,
        scrub: 0.5,
        start: 'top top',
        end: 'bottom top',
      },
      y: -100,
    });
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        style={{ backgroundImage: `url("${bannerImgSrc}")` }}
        className="w-full h-[270px] lg:h-[500px] bg-slate-300 bg-cover bg-center pl-5 lg:pl-0 pr-0 lg:pr-[158px] flex items-center lg:justify-end relative"
      >
        {/** Overlay --Start-- */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#292929] opacity-30 z-[2]"></div>
        {/** Overlay --End-- */}
        <h1
          ref={pageTitleRef}
          className="text-white/50 font-extrabold text-[40px] leading-[44px] lg:text-[76px] lg:leading-[84px] font-primary uppercase relative z-[4]"
        >
          {pageTitle}
        </h1>
      </div>
      <div className="container_fixed">
        <div className="bg-white relative z-[3] -mt-10 lg:-mt-[52px] mb-9 lg:mb-[60px]">
          <div className="h-10 lg:h-[52px] border-b border-gray-light flex items-center justify-end pr-5 lg:pr-12">
            <div className="w-[58px] lg:w-[100px] h-px bg-gray-3"></div>
          </div>
          <div className="max-w-[calc(900px+32px)] px-4 mx-auto pt-3 lg:pt-1">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonPageLayout;

import { classes, menus } from '@config/constants';
import { cx } from '@utils';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SharePanel = dynamic(() => import('@components/SharePanel'), {
  ssr: false,
});

const DesktopHeader = () => {
  const [isOpenSharePanel, setIsOpenSharePanel] = useState(false);
  const router = useRouter();

  const pageTitlte = menus.find((menu) =>
    menu.url.startsWith(router.pathname),
  )?.text;

  return (
    <header
      id="desktopHeader"
      className={cx('absolute lg:fixed top-0 w-full z-[999]', classes.header)}
    >
      <div className="w-[calc(100%-40px)] lg:w-[92%] lg:max-w-[1024px] bg-white border-b border-gray-light relative overflow-hidden">
        <div className="pl-5 lg:pl-[30px] flex justify-between items-center h-[50px]">
          <p className="text-[14px] lg:text-[16px] leading-[150%] text-black font-primary font-semibold">
            <span className="text-gray-1">Page :</span> {pageTitlte || '- - -'}
          </p>

          <SharePanel
            isOpenSharePanel={isOpenSharePanel}
            onClose={() => setIsOpenSharePanel(false)}
          />

          <button
            onClick={() => setIsOpenSharePanel(true)}
            className="text-[14px] lg:text-[16px] leading-[150%] text-black font-gilroy-bold pr-5 lg:pr-[30px] pl-6 border-l border-gray-light h-full"
          >
            Share
          </button>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;

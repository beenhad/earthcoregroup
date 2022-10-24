import SidebarContent from '@components/SidebarContent';
import MenuIcon from '@components/Svgs/MenuIcon';
import { APP_NAME } from '@config/constants';
import useMobileSidebar from '@hooks/useMobileSidebar';
import { cx } from '@utils';
import Image from 'next/image';
import Link from 'next/link';

const MobileHeader = () => {
  const { isOpen, closeMenu } = useMobileSidebar();
  return (
    <>
      <MobileHeaderTop />
      <div
        id="overlay"
        onClick={(e: any) => e.target.id === 'overlay' && closeMenu()}
        className={cx(
          'fixed top-0 left-0 w-full h-full z-[999999] duration-200 lg:hidden',
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0 delay-500',
        )}
      >
        <div
          className={cx(
            'h-full bg-white border-r border-gray-light w-[80%] duration-500 flex flex-col',
            isOpen ? 'translate-x-0 delay-200' : '-translate-x-full',
          )}
        >
          {/* <div className="px-5 relative h-[54px] flex items-center lg:hidden shrink-0">
            <button onClick={closeMenu}>
              <MenuIcon />
            </button>

            <div className="absolute top-1/2 -translate-y-1/2 left-[167px] w-10">
              <SiteLogo />
            </div>
          </div> */}

          <div className="grow overflow-y-auto">
            <SidebarContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;

export const MobileHeaderTop = () => {
  const { setIsOpen } = useMobileSidebar();
  return (
    <header className="px-5 relative h-[54px] bg-white border-b border-gray-light z-[3] flex items-center justify-between lg:hidden shrink-0">
      <button onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </button>

      <div className="w-[30px]">
        <Link href={'/'}>
          <a className="[&>span]:!block">
            <Image
              width={200}
              height={200}
              src="/img/ecg-icon.svg"
              alt={APP_NAME}
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

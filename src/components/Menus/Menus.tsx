import PlusIcon from '@components/Svgs/PlusIcon';
import { menus } from '@config/constants';
import useMobileSidebar from '@hooks/useMobileSidebar';
import { cx } from '@utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ComponentProps, useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const textStyle =
  'font-primary text-[16px] leading-[18px] lg:text-[18px] lg:leading-[20px] text-black block';

const navLinkStyle = cx(
  'py-4 pr-8 pl-[68px] border-b border-gray-light',
  textStyle
);

const Menus = () => {
  const router = useRouter();
  const { closeMenu } = useMobileSidebar();
  const [isOpenSubMenu, setisOpenSubMenu] = useState(false);
  const [activeSubMenuKey, setActiveSubMenuKey] = useState<string | null>(null);

  const closeSubmenu = () => {
    setisOpenSubMenu(false);
  };

  const setSubmenuKey = (key: string) => {
    setActiveSubMenuKey(key);
    setisOpenSubMenu(true);
  };
  return (
    <div
      className={cx(
        'mt-8 lg:mt-10 overflow-hidden relative duration-500',
        !isOpenSubMenu
          ? 'h-[221px]'
          : activeSubMenuKey === 'about-us'
          ? 'h-[180px] lg:h-[186px]'
          : 'h-[230px] lg:h-[239px]'
      )}
    >
      <div
        className={cx(
          isOpenSubMenu ? '-translate-x-full' : 'translate-x-0',
          'duration-500 ease-in-out'
        )}
      >
        <Menu text="About Us" onClick={() => setSubmenuKey('about-us')} />
        <Link href={'/residential/#residential'}>
          <a onClick={closeMenu} className={navLinkStyle}>
            Residential
          </a>
        </Link>

        <Link href={'/get-a-quote'}>
          <a onClick={closeMenu} className={navLinkStyle}>
            Get a Quote
          </a>
        </Link>
      </div>

      {/** Submenus --Start-- */}
      <div
        className={cx(
          isOpenSubMenu ? 'translate-x-0' : 'translate-x-full',
          'duration-500 ease-in-out absolute top-0 left-0 w-full'
        )}
      >
        <button className="mb-1 ml-8" onClick={closeSubmenu}>
          <HiArrowNarrowLeft size={20} />
        </button>

        {menus
          .filter((menu) => menu.pageKey === activeSubMenuKey)
          .map((menu, i) => {
            // if (menu.isHashUrl && router.pathname === '/about-us') {
            //   return (
            //     <a
            //       key={i}
            //       onClick={closeMenu}
            //       className={cx(
            //         'py-4 px-8 border-b border-gray-light',
            //         textStyle,
            //       )}
            //       href={`#${menu.url.split('#')[1]}`}
            //     >
            //       {menu.text}
            //     </a>
            //   );
            // }
            return (
              <Link href={menu.url} key={i}>
                <a
                  onClick={closeMenu}
                  className={cx(
                    'py-4 px-8 border-b border-gray-light',
                    textStyle
                  )}
                >
                  {menu.text}
                </a>
              </Link>
            );
          })}
      </div>
      {/** Submenus --End-- */}
    </div>
  );
};

export default Menus;

type MenuProps = {
  text: string;
} & ComponentProps<'div'>;
const Menu = ({ text, ...props }: MenuProps) => {
  return (
    <div
      {...props}
      className="flex items-center px-8 py-4 gap-3 border-b border-gray-light first:border-t cursor-pointer"
    >
      <PlusIcon />
      <p className={textStyle}>{text}</p>
    </div>
  );
};

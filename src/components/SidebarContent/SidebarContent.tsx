import Menus from '@components/Menus';
import SiteLogo from '@components/SiteLogo/SiteLogo';
import Spinner from '@components/Spinner';
import FacebookIcon from '@components/Svgs/FacebookIcon';
import InstagramIcon from '@components/Svgs/InstagramIcon';
import { contact } from '@config/constants';
import useMobileSidebar from '@hooks/useMobileSidebar';
import usePageTransition from '@hooks/usePageTransition';
import { IoCloseSharp } from 'react-icons/io5';

const SidebarContent = () => {
  const { show } = usePageTransition();
  const { closeMenu } = useMobileSidebar();
  const { email, phone } = contact;
  return (
    <div className="h-full flex flex-col lg:pt-[60px] overflow-y-auto gap-4 relative">
      {/** Spinner --Start-- */}
      {show && (
        <div className="absolute right-7 top-7">
          <Spinner />
        </div>
      )}
      {/** Spinner --End-- */}
      <div className="relative">
        <button
          className="absolute top-[60px] right-5 lg:hidden"
          onClick={closeMenu}
        >
          <IoCloseSharp size={20} />
        </button>
        <div
          className="mt-14 lg:mt-0 pl-5 lg:pl-8 max-w-[160px]"
          onClick={closeMenu}
        >
          <SiteLogo />
        </div>
        <p className="text-[14px] lg:text-[16px] leading-[150%] font-gilroy-regular text-black mt-6 pl-5 lg:pl-8">
          CREATING, ORGANIC,
          <br /> REAL, ESTATE.
        </p>

        <Menus />

        {/** Contact Info --Start-- */}
        <div className="pl-5 lg:pl-8 mt-9 lg:mt-[53px]">
          <h6 className="font-primary font-bold text-[16px] lg:text-[18px] mb-5">
            CONTACT INFO
          </h6>

          <div className="space-y-4">
            <p className="text-[14px] lg:text-[16px] leading-[19px] text-black font-gilroy-regular">
              Phone : <span className="text-gray-2">{phone}</span>
            </p>
            <p className="text-[14px] lg:text-[16px] leading-[19px] text-black font-gilroy-regular">
              Email :{' '}
              <a className="text-gray-2" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          </div>
        </div>
        {/** Contact Info --End-- */}
      </div>

      {/** Find Us --Start-- */}
      <div className="mt-10 pl-5 lg:pl-8">
        <h6 className="font-primary font-bold text-[16px] lg:text-[18px]">
          FIND US
        </h6>

        <div className="mt-3 lg:mt-5 flex gap-2 lg:gap-4">
          <a
            href="https://www.instagram.com/earthcoregroup/"
            target={'_blank'}
            className="w-6 lg:w-7"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://facebook.com/earthcoregroup"
            target={'_blank'}
            className="w-6 lg:w-7"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
      {/** Find Us --End-- */}

      {/** Copyrights --Start-- */}
      <div className="mt-auto py-5 px-8 text-center border-t border-gray-light text-[11px] lg:text-[12px] text-black font-gilroy-regular">
        <p>2024 © EarthCore Group LLC.</p>
      </div>
      {/** Copyrights --End-- */}
    </div>
  );
};

export default SidebarContent;

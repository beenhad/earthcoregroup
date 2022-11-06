/* eslint-disable @next/next/no-sync-scripts */
import { contact } from '@config/constants';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('./components/Map'), { ssr: false });
const TypeForm = dynamic(() => import('./components/TypeForm'), { ssr: false });

const GetAQuote = () => {
  return (
    <>
      {/** Map Section --Start-- */}
      <Map />
      {/** Map Section --End-- */}

      {/** Body --Start-- */}
      <div className="container_fixed">
        <div className="bg-white relative z-[9999] -mt-10 lg:-mt-[52px] mb-9 lg:mb-[60px] pb-[60px]">
          <div className="h-10 lg:h-[52px]"></div>
          <div className="max-w-[calc(900px+32px)] px-4 mx-auto pt-3 lg:pt-1">
            <div className="grid grid-cols-1 md:grid-cols-[auto,332px] gap-10 lg:gap-[170px]">
              {/** Contact Form --Start-- */}
              {/* <form className="space-y-[28px] lg:space-y-12 pb-[32px] border-b border-gray-light">
                <input type="text" className="__input" placeholder="Name" />
                <input type="email" className="__input" placeholder="E-mail" />
                <textarea
                  className="__input resize-none"
                  placeholder="Message"
                  rows={5}
                ></textarea>

                <button className="!mt-[56px] lg:!mt-[152px] pr-[34px] pl-[22px] hover:pl-[34px] py-3 bg-black text-white text-sm sm:text-base flex items-center gap-3 group">
                  <div className="w-0 group-hover:w-8 duration-300 h-0.5 bg-white"></div>
                  Send
                </button>
              </form> */}
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-white z-10"></div>
                <TypeForm />
              </div>
              {/** Contact Form --End-- */}

              {/** Address Box --Start-- */}
              <div className="space-y-[28px] lg:space-y-8">
                <div className="font-gilroy-regular text-[14px] lg:text-[16px] space-y-2 pb-3 border-b border-gray-light">
                  <p className="text-gray-1">Phone :</p>
                  <p>{contact.phone}</p>
                </div>
                <div className="font-gilroy-regular text-[14px] lg:text-[16px] space-y-2 pb-3 border-b border-gray-light">
                  <p className="text-gray-1">Email :</p>
                  <a href={contact.email}>{contact.email}</a>
                </div>
                <div className="font-gilroy-regular text-[14px] lg:text-[16px] space-y-2 pb-3 border-b border-gray-light">
                  <p className="text-gray-1">Address :</p>
                  <p>{contact.addressContactPage}</p>
                </div>
              </div>
              {/** Address Box --End-- */}
            </div>
          </div>
        </div>
      </div>
      {/** Body --End-- */}
    </>
  );
};

export default GetAQuote;

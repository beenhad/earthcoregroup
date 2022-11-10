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
        <div className="bg-white overflow-hidden relative z-[9999] -mt-10 lg:-mt-[52px] mb-9 lg:mb-[60px] pb-[60px]">
          <div className="h-10 lg:h-[52px]"></div>
          <div className="max-w-[calc(900px+32px)] px-4 mx-auto pt-3 lg:pt-1">
            <div className="grid grid-cols-1 md:grid-cols-[auto,332px] gap-14 lg:gap-[170px] translate-y-[-30px] lg:-translate-y-[75px]">
              {/** Contact Form --Start-- */}
              <div className="relative overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-1 bg-white z-10"></div> */}
                <div className="lg:-translate-y-[0]">
                  <TypeForm />
                </div>
              </div>
              {/** Contact Form --End-- */}

              {/** Address Box --Start-- */}
              <div className="space-y-[28px] lg:space-y-8 lg:pt-[95px]">
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

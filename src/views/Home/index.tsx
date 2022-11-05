import dynamic from 'next/dynamic';
import Link from 'next/link';

const VideoPlayer = dynamic(() => import('./components/VideoPlayer'), {
  ssr: false,
});
const Home = () => {
  return (
    <div className="grow flex flex-col relative">
      <VideoPlayer />
      <div className="z-[3] flex flex-col justify-center items-center text-center absolute w-full h-full bg-[#292929]/30 text-white">
        <p className="border-b border-white pb-[18px] text-[18px] leading-[21px] lg:text-[24px] lg:leading-[28px] font-gilroy-regular px-[30px] lg:px-[65px] ">
          Restoring Atlanta
        </p>
        <h1 className="mt-5 mb-10 lg:mb-[55px] text-[24px] leading-[27px] lg:text-[40px] lg:leading-[44px] font-primary font-bold">
          One Project At A Time
        </h1>

        <Link href="/about-us#our-process">
          <a className="outline-none text-[16px] leading-[19px] lg:text-[20px] lg:leading-[24px] font-gilroy-bold bg-white pr-[30px] pl-[18px] hover:pl-[30px] py-4 text-black flex items-center gap-3 group">
            <div className="w-0 group-hover:w-10 duration-300 h-0.5 bg-black"></div>
            Discover Our Process
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;

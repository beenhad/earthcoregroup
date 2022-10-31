import Link from 'next/link';

const GetInTouchFooter = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:justify-between items-center pb-12 border-t border-gray-light pt-6">
        <h6 className="text-sm sm:text-base">Ready to start your project?</h6>

        <Link href={'/get-a-quote'}>
          <a className="pr-[34px] pl-[22px] hover:pl-[34px] py-2.5 bg-black text-white text-sm sm:text-base flex items-center gap-3 group">
            <div className="w-0 group-hover:w-8 duration-300 h-0.5 bg-white"></div>
            GET IN TOUCH
          </a>
        </Link>
      </div>
    </div>
  );
};

export default GetInTouchFooter;

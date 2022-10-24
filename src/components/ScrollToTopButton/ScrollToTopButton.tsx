import { cx } from '@utils';
import { useEffect, useRef, useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
const ScrollToTopButton = () => {
  const [showBtn, setShowBtn] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;

    if (!btn) return;

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const trackScroll = (e: Event) => {
      const fromTop = window.scrollY;

      if (fromTop > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    btn.addEventListener('click', scrollToTop);

    window.addEventListener('scroll', trackScroll);

    return () => {
      btn.removeEventListener('click', scrollToTop);
      window.removeEventListener('click', trackScroll);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={cx(
        'fixed bottom-5 right-5 z-[9999] bg-white w-10 lg:w-12 aspect-square flex justify-center items-center shadow-md hover:scale-110 duration-200',
        showBtn
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
    >
      <BsArrowUpShort size={25} />
    </button>
  );
};

export default ScrollToTopButton;

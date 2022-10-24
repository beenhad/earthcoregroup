import { atom, useAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import useWindowWidtH from './useWindowWidth';

const pageTransitionAtom = atom(false);

const usePageTransition = () => {
  const windowWidth = useWindowWidtH();
  const [show, setShow] = useAtom(pageTransitionAtom);
  const intervalRef = useRef<any>();

  const offTransition = () => {
    setShow(false);

    clearInterval(intervalRef.current);
    const dd = document.querySelectorAll('.dddd');

    [].forEach.call(dd, function (div: any) {
      div.style.opacity = '0';
    });
  };

  useEffect(() => {
    if (show) {
      intervalRef.current = setInterval(() => {
        const max = windowWidth > 1024 ? 150 : 60;
        const id = Math.floor(Math.random() * (max - 0 + 1) + 0);
        const box = document.getElementById(`preloader_${id}`);

        if (!box) return;

        box.style.opacity = '1';
        box.style.transition = '0.5s';
      }, 500);
    }

    return () => {
      clearTimeout(intervalRef.current);
    };
  }, [show, windowWidth]);

  return { show, setShow, offTransition };
};

export default usePageTransition;

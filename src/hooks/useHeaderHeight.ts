import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const headerHeightAtom = atom(0);

const useHeaderHeight = () => {
  const router = useRouter();
  const [headerHeight, setHeaderHeight] = useAtom(headerHeightAtom);

  useEffect(() => {
    setTimeout(() => {
      const desktopHeader = document.getElementById('desktopHeader');
      console.log({ desktopHeader });
      setHeaderHeight(desktopHeader?.clientHeight || 0);
    }, 200);
  }, [router.pathname, setHeaderHeight]);

  return { headerHeight };
};

export default useHeaderHeight;

import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const openMobileSidebar = atom(false);
const isClosedFullyAtom = atom(true);

const useMobileSidebar = () => {
  const [isClosedFully, setClosedFully] = useAtom(isClosedFullyAtom);
  const [isOpen, setIsOpen] = useAtom(openMobileSidebar);

  const closeMenu = () => {
    setIsOpen(false);
    let timeout: any;

    timeout = setTimeout(() => {
      clearTimeout(timeout);
      setClosedFully(true);
    }, 500);
  };

  useEffect(() => {
    isOpen && setClosedFully(false);
  }, [isOpen, setClosedFully]);

  return { isOpen, setIsOpen, closeMenu, isClosedFully };
};

export default useMobileSidebar;

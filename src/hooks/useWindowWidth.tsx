import { useEffect, useState } from 'react';

import { useWindowWidth } from '@react-hook/window-size';

const useWindowWidtH = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const onlyWidth = useWindowWidth();

  useEffect(() => {
    setWindowWidth(onlyWidth || 0);
  }, [onlyWidth]);

  return windowWidth;
};

export default useWindowWidtH;

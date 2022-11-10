import { useEffect } from 'react';

/* eslint-disable @next/next/no-sync-scripts */
const TypeForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';

    setTimeout(() => {
      document.head.appendChild(script);
    }, 1000);
  }, []);

  return (
    <>
      <div
        data-tf-widget="JOGhPyq4"
        data-tf-iframe-props="title=EarthCore Group"
        data-tf-medium="snippet"
        // style="width:100%;height:400px;"
        className="w-full h-[400px]"
      ></div>
    </>
  );
};

export default TypeForm;

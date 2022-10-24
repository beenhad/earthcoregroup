import Home from '@views/Home';
import { NextSeo } from 'next-seo';

const HomePage = () => {
  return (
    <>
      <NextSeo title="EarthCore Group - Creating. Organic. Real. Estate." />
      <Home />
    </>
  );
};

export default HomePage;

import { getPageTitle } from '@utils';
import AboutUs from '@views/AboutUs';
import { NextSeo } from 'next-seo';

const AboutUsPage = () => {
  return (
    <>
      <NextSeo title={getPageTitle('About Us')} />
      <AboutUs />
    </>
  );
};

export default AboutUsPage;

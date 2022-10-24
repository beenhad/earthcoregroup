import { getPageTitle } from '@utils';
import Environmental from '@views/Environmental';
import { NextSeo } from 'next-seo';

const EnvironmentalPage = () => {
  return (
    <>
      <NextSeo title={getPageTitle('Environmental')} />
      <Environmental />
    </>
  );
};

export default EnvironmentalPage;

import { getPageTitle } from '@utils';
import Residential from '@views/Residential';
import { NextSeo } from 'next-seo';

const ResidentialPage = () => {
  return (
    <>
      <NextSeo title={getPageTitle('Residential')} />
      <Residential />
    </>
  );
};

export default ResidentialPage;

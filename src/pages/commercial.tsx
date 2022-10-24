import { getPageTitle } from '@utils';
import Commercial from '@views/Commercial';
import { NextSeo } from 'next-seo';

const CommercialPage = () => {
  return (
    <>
      <NextSeo title={getPageTitle('Commercial')} />
      <Commercial />
    </>
  );
};

export default CommercialPage;

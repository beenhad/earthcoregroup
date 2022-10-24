import { getPageTitle } from '@utils';
import IntownFix from '@views/IntownFix';
import { NextSeo } from 'next-seo';

const IntownFixPage = () => {
  return (
    <>
      <NextSeo title={getPageTitle('Intown Fix')} />
      <IntownFix />
    </>
  );
};

export default IntownFixPage;

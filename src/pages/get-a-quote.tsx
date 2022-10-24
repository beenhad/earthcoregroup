import { getPageTitle } from '@utils';
import GetAQuote from '@views/GetAQuote';
import { NextSeo } from 'next-seo';

const GetAQuotePage = () => {
  return (
    <>
      <NextSeo title={getPageTitle('Get a Quote')} />
      <GetAQuote />
    </>
  );
};

export default GetAQuotePage;

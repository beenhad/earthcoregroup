import CardsRendered from '@components/CardsRendered';
import CommonPageLayout from '@components/CommonPageLayout';
import GetInTouchFooter from '@components/GetInTouchFooter';
import { intownFixCards } from '@config/constants';

const IntownFix = () => {
  return (
    <CommonPageLayout
      bannerImgSrc="/img/intown-fix-banner.png"
      pageTitle="Intown Fix"
    >
      <h2 className="__h2">Intown Fix</h2>
      <p className="__body_text mt-5">
        Our Intown services are second to none and range from complete property
        flips, interior renovation, exterior renovation, carpentry, and handyman
        services.
      </p>

      <div className="my-9 lg:my-12 pt-9 lg:pt-12 border-t border-gray-light">
        <CardsRendered cards={intownFixCards} />
      </div>

      <GetInTouchFooter />
    </CommonPageLayout>
  );
};

export default IntownFix;

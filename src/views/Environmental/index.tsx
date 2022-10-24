import CardsRendered from '@components/CardsRendered';
import CommonPageLayout from '@components/CommonPageLayout';
import GetInTouchFooter from '@components/GetInTouchFooter';
import { environmentalCards } from '@config/constants';

const Environmental = () => {
  return (
    <CommonPageLayout
      bannerImgSrc="/img/environmental-banner.jpeg"
      pageTitle="Environmental"
    >
      <h2 className="__h2">Environmental Services</h2>
      <p className="__body_text mt-5">
        Our Environmental services include property transfer site assessments,
        soil & groundwater investigations, corrective action plans/design,
        remediation, and site restoration including storm water BMP’s. Also
        conduct asbestos/lead paint/hazardous materials inspections, testing,
        and reporting in support of building demolition.
      </p>

      <div className="my-9 lg:my-12 pt-9 lg:pt-12 border-t border-gray-light">
        <CardsRendered cards={environmentalCards} />
      </div>

      <GetInTouchFooter />
    </CommonPageLayout>
  );
};

export default Environmental;

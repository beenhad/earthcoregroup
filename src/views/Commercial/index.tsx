import CommonPageLayout from '@components/CommonPageLayout';
import GetInTouchFooter from '@components/GetInTouchFooter';

const Commercial = () => {
  return (
    <CommonPageLayout
      bannerImgSrc="/img/commercial-banner.png"
      pageTitle="COMMERCIAL"
    >
      <h2 className="__h2">Commercial /Civil Site Development</h2>
      <p className="__body_text mt-5">
        ECG’s Civil Site Development division specializes in civil construction
        services in support of early stage land development and redevelopment
        projects. These services include:
      </p>

      <ul className="[&>li]:list-item [&>li]:list-disc __body_text mt-8 lg:mt-10 pb-8 lg:pb-10 border-b border-gray-light mb-8 lg:mb-12 &>li]:list-outside pl-4 lg:pl-6">
        <li>Tree Harvesting</li>
        <li>Land Clearing & Grubbing</li>
        <li>Site Grading</li>
        <li>Erosion Plans</li>
        <li>Detention Pond Construction</li>
        <li>Storm water collection and conveyance system construction</li>
        <li>Retaining walls</li>
        <li>Site utilities and temporary facilities</li>
        <li>Access roads</li>
        <li>Temporary/permanent seeding</li>
      </ul>

      <GetInTouchFooter />
    </CommonPageLayout>
  );
};

export default Commercial;

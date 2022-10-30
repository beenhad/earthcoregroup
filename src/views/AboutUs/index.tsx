import CardsRendered from '@components/CardsRendered';
import CommonPageLayout from '@components/CommonPageLayout';
import Divider from '@components/Divider';
import GetInTouchFooter from '@components/GetInTouchFooter';
import { whatWeDoCards } from '@config/constants';
import useScrollToSection from '@hooks/useScrollToSection';

const AboutUs = () => {
  useScrollToSection();

  return (
    <>
      <CommonPageLayout
        bannerImgSrc="/img/about-header.png"
        pageTitle="About Us"
      >
        <h2 className="__h2 scroll-mt-20" data-id="about-us">
          Creating an Environment that Inspires You
        </h2>
        <p className="__body_text mt-5">
          Earthcore Group (ECG+) is a rapidly growing, super exciting, highly
          versatile small business, serving the diverse needs of the Atlanta
          residential and light commercial/industrial community.
          <br />
          <br />
          ECG+ provides top quality design and installation/construction
          services to homeowners who want to reinvent their outdoor living
          spaces, and repair/ renovate their indoor living spaces, and to create
          seamless transitions for optimal enjoyment of the entire property.
          ECG+ also serves the specialized needs of real estate investors and
          developers with initial civil site development and remediation of
          environmentally impaired properties and structures thereby
          facilitating property transfer and redevelopment. ECG+ is a team of
          energetic, talented, and multi-disciplined professionals working
          collaboratively and tirelessly to ensure our clients’ expectations are
          exceeded on every project.
        </p>

        <Divider className="mt-12 mb-8" />

        <h2 className="__h2 scroll-mt-20" data-id="what-we-do">
          What We Do
        </h2>

        <div className="mt-12">
          <CardsRendered className="!grid-cols-2" cards={whatWeDoCards} />
        </div>

        <div className="mt-11 lg:mt-[60px]">
          <h2 className="__h2 scroll-mt-20" data-id="our-process">
            Down to the details
          </h2>
          <p className="mt-5 __body_text">
            Earthcore Group’s architects, engineers, and other professionals
            take pride in executing all facets of the design process with
            precision.
            <br />
            <br />
            Measure twice, cut once has been a long time mantra we live by.
            Using the latest architectural design software available, we are
            able to bring concepts to life before your eyes without having to
            move a stone.
            <br />
            <br />
            Check out the example below of the type of project files we make for
            clients upon request!
          </p>
        </div>

        <div className="mt-9 lg:mt-12 pb-5 lg:pb-8 border-b border-gray-light mb-g lg:mb-8">
          <iframe
            src="https://myhub.autodesk360.com/ue283d8b2/shares/public/SH7f1edQT22b515c761ef57601e086f95852?mode=embed"
            className="w-full aspect-video"
            frameBorder={0}
            allowFullScreen={true}
          ></iframe>
        </div>
        <GetInTouchFooter />
      </CommonPageLayout>
    </>
  );
};

export default AboutUs;

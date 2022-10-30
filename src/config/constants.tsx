import { CardWithImageProps, Menu } from './types';

export const classes = {
  sidebarWrapper: 'w-[358px]',
  pageTransitionWrapper:
    'lg:left-[358px] w-full lg:w-[calc(100%-358px)] h-screen top-0 ',
  layoutWrapper: 'lg:pl-[358px]',
  header:
    'left-0 w-full lg:w-[calc(100%-calc(358px+32px))] lg:left-[calc(358px+32px)]',
};

export const APP_NAME = 'EarthCore Group';
export const contact = {
  phone: '404-858-7391',
  email: 'info@earthcoregroup.com',
  addressSidebar: '2103 Faulkner Rd NE, Atlanta',
  addressContactPage: '2103 Faulkner Rd NE Atlanta, GA',
};

export const menus: Menu[] = [
  {
    text: 'About Us',
    url: '/about-us/#about-us',
    pageKey: 'about-us',
    isHashUrl: true,
  },
  {
    text: 'What We Do',
    url: '/about-us/#what-we-do',
    pageKey: 'about-us',
    isHashUrl: true,
  },
  {
    text: 'Our Process',
    url: '/about-us/#our-process',
    pageKey: 'about-us',
    isHashUrl: true,
  },
  {
    text: 'Residential',
    url: '/residential',
    pageKey: 'services',
  },
  {
    text: 'Environmental',
    url: '/environmental',
    pageKey: 'services',
  },
  {
    text: 'Intown Fix',
    url: '/intown-fix',
    pageKey: 'services',
  },
  {
    text: 'Commercial',
    url: '/commercial',
    pageKey: 'services',
  },
  {
    text: 'Get a Quote',
    url: '/get-a-quote',
    pageKey: '',
  },
];

export const whatWeDoCards: CardWithImageProps[] = [
  {
    imgSrc: '/img/residential.png',
    label: 'Residential',
    info: (
      <>
        <h6 className="i_t">Residential</h6>
        <p className="i_d">
          Earthcore Outdoor Living division specializes in transforming the look
          and atmosphere of the residential homes’ outdoor living space. The
          combination of landscape architecture, masonry, carpentry, earthwork,
          and landscaping make for brilliant transformations focused on visual
          appear and experience.
          <br />
          <br />
          ECG’s creations are not only beautiful but are intentionally crafted
          to optimize space utilization and utility for the homeowner and their
          guests.
        </p>
      </>
    ),
  },
  // {
  //   imgSrc: '/img/env.png',
  //   label: 'Environmental',
  //   info: (
  //     <>
  //       <h6 className="i_t">Environmental</h6>
  //       <p className="i_d">
  //         EarthCore Environmental has a much different focus, but one that is
  //         still absolutely “core” to the worlds’ mission: Environmental
  //         Sustainability.
  //         <br />
  //         <br />
  //         Our ECG Environmental leadership team has over 50 years of combined
  //         experience in environmental investigation, remediation and associated
  //         civil engineering design and construction focused on restoring
  //         contaminated sites for beneficial reuse and redevelopment. From
  //         remediation design through site clean-up.
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   imgSrc: '/img/commercial.png',
  //   label: 'Commercial',
  //   info: (
  //     <>
  //       <h6 className="i_t">Commercial</h6>
  //       <p className="i_d">
  //         We can remodel your kitchen, bathroom, basement, attic, add a new
  //         sunroom or deck. Our Goal is to elevate your space so that you love
  //         living in it.
  //       </p>
  //       <p className="i_d_b">Hardwood Floors:</p>
  //       <ul className="i_ul">
  //         <li>Installation</li>
  //         <li>Refinishing</li>
  //         <li>Repair</li>
  //       </ul>
  //       <p className="i_d_b">Windows & Doors:</p>
  //       <ul className="i_ul">
  //         <li>Featuring Anderson & Pella quality windows.</li>
  //       </ul>
  //       <p className="i_d_b">Custom Decks & Sunroom Designs:</p>
  //       <ul className="i_ul">
  //         <li>Pine</li>
  //         <li>Cedar</li>
  //         <li>Exotic Woods</li>
  //       </ul>
  //     </>
  //   ),
  // },
  // {
  //   imgSrc: '/img/handy-man.png',
  //   label: 'Intown Fix',
  //   info: (
  //     <>
  //       <h6 className="i_t">Intown Fix</h6>
  //       <p className="i_d">
  //         Earthcore Intown, our newest division, is an exciting addition to the
  //         ECG Family. Earthcore’s primary focus will be on purchasing and
  //         restoring Atlanta homes, and listing them for purchase. However, our
  //         contracting services are also available to assist in your personal
  //         home projects. Whether you are putting your home for sale and need
  //         light updating/ renovation, or plan on undergoing entire structural
  //         upgrades to your home, or need simple repairs, we have got you
  //         covered.
  //       </p>
  //       <p className="i_d_b">From</p>
  //       <ul className="i_ul">
  //         <li>Framing</li>
  //         <li>Painting</li>
  //         <li>Drywall</li>
  //         <li>Carpentry</li>
  //         <li>Electric</li>
  //         <li>Gas</li>
  //         <li>and more</li>
  //       </ul>
  //     </>
  //   ),
  // },
];

export const residentialCards: CardWithImageProps[] = [
  {
    imgSrc: '/img/water-features.png',
    label: 'Water Features',
    info: (
      <>
        <h6 className="i_t">Water Features</h6>
        <p className="i_d">
          Water Features are a trend in home landscape design but the concept of
          humans living near water is ancient and intrinsic.
          <br />
          <br />
          Whether you are using it as a means to add flowing water to the
          environment or to take your mind away from the busy city, water
          features make a serious impact on your home’s outdoor living space.
        </p>
        <p className="i_d_b">
          EarthCore Group offers a variety of water features:
        </p>
        <ul className="i_ul">
          <li>Pondless Waterfalls</li>
          <li>Fountains</li>
          <li>Koi Ponds</li>
          <li>8 much more!</li>
        </ul>
      </>
    ),
  },
  {
    imgSrc: '/img/fire-features.png',
    label: 'Fire Features',
    info: (
      <>
        <h6 className="i_t">Fire Features</h6>
        <p className="i_d">
          Fire features create a one of a kind experience. At EarthCore Group,
          our number one priority is the experience of the people who will be
          enjoying our creations.
          <br />
          <br />
          We offer a variety of materials, textures of stone, colors, and
          finishes to give your project an exclusive element of individuality.
        </p>
        <p className="i_d_b">
          EarthCore Group offers a variety of fire features:
        </p>
        <ul className="i_ul">
          <li>Fire Pits</li>
          <li>Fire Tables</li>
          <li>Gas Heaters</li>
          <li>Gas outdoor Cooking Equipment</li>
        </ul>
      </>
    ),
  },
  {
    imgSrc: '/img/retaining-walls.png',
    label: 'Retaining Walls',
    info: (
      <>
        <h6 className="i_t">Retaining Walls</h6>
        <p className="i_d">
          EarthCore Group has the Capabilities to build Retaining walls in all
          kinds of shapes, sizes, form, and function to fit your properties
          layout and aesthetic. From Simple pressure treated timber walls to
          modular block masonry, we have got you covered.
        </p>
        <p className="i_d_b">
          EarthCore Group offers a variety of fire features:
        </p>
        <ul className="i_ul">
          <li>Modular Block</li>
          <li>Cinder Block</li>
          <li>Decorative Stone Finishes</li>
          <li>Railroad Tie Walls</li>
          <li>Pressure Treated Timber Walls</li>
        </ul>
      </>
    ),
  },
  {
    imgSrc: '/img/patios-walkway.png',
    label: 'Patios & Walkways',
    info: (
      <>
        <h6 className="i_t">Patios & Walkways</h6>
        <p className="i_d">
          For both style and functionality, a patio makes the perfect addition
          to your outdoor home space. The Patio brings together timeless design
          with a variety of optional features to fit in your unique yard.
        </p>
        <p className="i_d_b">
          EarthCore Group offers we offer many various types of styles and
          materials:
        </p>
        <ul className="i_ul">
          <li>Bluestone</li>
          <li>Limestone</li>
          <li>Brick</li>
          <li>Flagstone</li>
          <li>Cobblestone</li>
          <li>Pavers</li>
          <li>Steppers</li>
        </ul>
      </>
    ),
  },
  {
    imgSrc: '/img/specialty-drainage.png',
    label: 'Speciality Drainage',
    info: (
      <>
        <h6 className="i_t">Speciality Drainage</h6>
        <p className="i_d">
          Specialty Drainage Drainage is one of the first infrastructure issues
          that must be addressed before the decorative construction can take
          place. We offer the full spectrum of drainage solutions for your
          property.
        </p>
        <ul className="i_ul">
          <li>Complete Drainage Systems</li>
          <li>Catch Basin</li>
          <li>Creek Beds</li>
          <li>8 much mOce</li>
        </ul>
      </>
    ),
  },
  {
    imgSrc: '/img/landscape-construction.png',
    label: 'Landscape Construction',
    info: (
      <>
        <h6 className="i_t">Landscape Construction</h6>
        <p className="i_d">
          The design and installation of vegetation is an art tradition,
          practiced by landscape designers, combining nature and culture in
          conjunction with the custom hardscapes, water & fire features – the
          proper flora complete the organic atmosphere of your homes’ outdoor
          living.
        </p>
      </>
    ),
  },
];

export const environmentalCards: CardWithImageProps[] = [
  {
    imgSrc: '/img/phase-1.png',
    label: 'Environmental Site Assessment Phase 1',
    info: (
      <>
        <h6 className="i_t">Environmental Site Assessment Phase 1</h6>
        <p className="i_d">
          The Phase I ESA involves a review of records, a site inspection, and
          interviews with owners, occupants, neighbors and local government
          officials.
          <br />
          <br />
          The review of government records and interviews may take a lot of me.
          To ensure a quality assessment, allow me sufficient time for the
          process.
        </p>
      </>
    ),
  },
  {
    imgSrc: '/img/phase-2.png',
    label: 'Environmental Site Assessment Phase 2',
    info: (
      <>
        <h6 className="i_t">Environmental Site Assessment Phase 2</h6>
        <p className="i_d">
          If a Phase I ESA identifies potential contamination of the site by
          hazardous materials, a Phase II ESA may be conducted. The Phase II ESA
          includes sampling and laboratory analysis to confirm the presence of
          hazardous materials. Some of the tests that may be performed include:
        </p>
        <ul className="i_ul">
          <li>Surficial soil and water samples</li>
          <li>Subsurface soil borings</li>
          <li>
            Groundwater monitoring well installation, sampling, and analysis
          </li>
          <li>Drum sampling</li>
          <li>Sampling of dry wells, floor drains and catch basins</li>
          <li>
            Transformer/capacitor sampling for Polychlorinated Biphenyls [PCBs]
          </li>
          <li>Geophysical testing for buried tanks and drums</li>
          <li>Testing of underground storage tanks [USTs]</li>
        </ul>
      </>
    ),
  },
  {
    imgSrc: '/img/er.png',
    label: 'Environmental Remediation',
    info: (
      <>
        <h6 className="i_t">Environmental Remediation</h6>
        <p className="i_d">
          EarthCore Group has the ability to perform the entire remediation
          process in house.
        </p>
        <ul className="i_ul">
          <li>Regulatory Compliant Waste Characterization</li>
          <li>Profiling</li>
          <li>Transportation</li>
          <li>Disposal</li>
        </ul>
        <p className="i_d">
          Once the initial site assessment has been performed and the results
          have been analyzed, our experienced team of Professional Environmental
          and Civil engineers will design a corrective action plan.
          <br />
          <br />
          This is a very precise process and all inquiries will have unique and
          independent analyses.
        </p>
      </>
    ),
  },
  {
    imgSrc: '/img/re.png',
    label: 'Real Estate & Industrial Consultaion',
    info: (
      <>
        <h6 className="i_t">Real Estate & Industrial Consultaion</h6>
        <p className="i_d">
          Environmental consulting and remediation for property redevelopment.
          Requirements vary between lending institutions, but ESAs are typically
          required during the due diligence process to avoid potential
          environmental risk and liabilities. We are here to make sure your big
          move doesn’t come with any future surprises and that your company can
          officially be declared environmental friendly by our “EarthCore Stamp
          of Approval”.
        </p>
      </>
    ),
  },
];
export const intownFixCards: CardWithImageProps[] = [
  {
    imgSrc: '/img/remodeling.png',
    label: 'Remodeling Services',
    info: (
      <>
        <h6 className="i_t">Remodeling Services</h6>
        <p className="i_d">
          We can remodel your kitchen, bathroom, basement, attic, add a new
          sunroom or deck. Our Goal is to elevate your space so that you love
          living in it.
        </p>
        <p className="i_d_b">Hardwood Floors:</p>
        <ul className="i_ul">
          <li>Installation</li>
          <li>Refinishing</li>
          <li>Repair</li>
        </ul>
        <p className="i_d_b">Windows & Doors:</p>
        <ul className="i_ul">
          <li>Featuring Anderson & Pella quality windows.</li>
        </ul>
        <p className="i_d_b">Custom Decks & Sunroom Designs:</p>
        <ul className="i_ul">
          <li>Pine</li>
          <li>Cedar</li>
          <li>Exotic Woods</li>
        </ul>
      </>
    ),
  },
  {
    imgSrc: '/img/handy-man.png',
    label: 'Home Renovating & Handyman',
    info: (
      <>
        <h6 className="i_t">Home Renovating & Handyman</h6>
        <p className="i_d">
          We do over 70 kitchen or bathroom renovations each year. We also
          provide expert handyman services.
        </p>
        <p className="i_d_b">Painting:</p>
        <ul className="i_ul">
          <li>Inside & Out featuring Sherwin Williams No VOC paints.</li>
        </ul>
        <p className="i_d_b">Structural Repairs:</p>
        <ul className="i_ul">
          <li>Inside 8 Out featuring Sherwin Williams No VOC paints</li>
          <li>Cracked Brick</li>
          <li>and more!</li>
        </ul>
        <p className="i_d_b">Handyman Services:</p>
        <ul className="i_ul">
          <li>Wood Rot Repairs</li>
          <li>Pressure Washing</li>
          <li>Plaster Repair</li>
          <li>and more!</li>
        </ul>
      </>
    ),
  },
  {
    imgSrc: '/img/roofing-1.png',
    label: 'Roofing Services',
    info: (
      <>
        <h6 className="i_t">Roofing Services</h6>
        <p className="i_d">
          Roof repair maintenance and roof replacement specialist for Atlanta’s
          Intown neighborhoods.
        </p>
        <p className="i_d_b">Roofing:</p>
        <ul className="i_ul">
          <li>
            We ensure that our roofing services are of the utmost quality using
            the best materials
          </li>
        </ul>
      </>
    ),
  },
  {
    imgSrc: '/img/ha-1.png',
    label: 'Heating & Air Conditioning',
    info: (
      <>
        <h6 className="i_t">Heating & Air Conditioning</h6>
        <p className="i_d">
          Upgrade your home or business cooling system with us. Save on your
          utility costs with a new energy-efficient air conditioner.
        </p>
      </>
    ),
  },
  {
    imgSrc: '/img/air.png',
    label: 'Heating',
    info: (
      <>
        <h6 className="i_t">Heating</h6>
        <p className="i_d">
          We are your trusted name in residential and commercial heating
          repairs, maintenance, and installations. We also work with property
          managers and real estate agents.
        </p>
      </>
    ),
  },
  {
    imgSrc: '/img/indoor-air.png',
    label: 'Indoor Air Quality',
    info: (
      <>
        <h6 className="i_t">Indoor Air Quality</h6>
        <p className="i_d">
          Reduce allergens and other harmful particles in your living or work
          space with our indoor air quality systems.
        </p>
        <p className="i_d_b">Choose from:</p>
        <ul className="i_ul">
          <li>Humidifiers</li>
          <li>Duct Systems</li>
          <li>UV Lights</li>
          <li>and more!</li>
        </ul>
      </>
    ),
  },
];

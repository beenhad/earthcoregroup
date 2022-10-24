import { AppPropsWithLayout } from '@config/types';
import DesktopLayout from '@layouts/DesktopLayout';
import '../styles/globals.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DesktopLayout>{page}</DesktopLayout>);

  return getLayout(<Component {...pageProps} />);
}

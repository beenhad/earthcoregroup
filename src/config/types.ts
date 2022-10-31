import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type OnlyChildren = {
  children: ReactNode;
};
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type CommonPageLayoutProps = {
  bannerImgSrc: string;
  pageTitle: string;
} & OnlyChildren;

export type CardWithImageProps = {
  imgSrc: string;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  info?: ReactNode;
  hideOverlay?: boolean;
};

export type Menu = {
  text: string;
  url: string;
  pageKey: string;
  isHashUrl?: boolean;
};

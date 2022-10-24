import { APP_NAME } from '@config/constants';
import classNames from 'classnames';

export const cx = classNames;

export const scrollTo = (dataId: string) => {
  const dom: HTMLDivElement | null = document.querySelector(
    `[data-scrollId='${dataId}']`,
  );

  if (!dom) return;
  const desktopHeight =
    document.getElementById('desktopHeader')?.clientHeight || 0;

  const offsets = dom.getBoundingClientRect();
  window.scrollTo(0, offsets.top - (desktopHeight + 20));
};

export const getPageTitle = (title: string) => title + ' - ' + APP_NAME;

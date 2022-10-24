import { cx } from '@utils';

const Divider = ({ className }: { className?: string }) => {
  return <div className={cx('bg-gray-light w-full h-px', className)}></div>;
};

export default Divider;

import SidebarContent from '@components/SidebarContent';
import { classes } from '@config/constants';
import { cx } from '@utils';

const DesktopSidebar = () => {
  return (
    <aside
      className={cx(
        'fixed top-0 left-0 h-full hidden lg:block bg-white',
        classes.sidebarWrapper,
      )}
    >
      <SidebarContent />
    </aside>
  );
};

export default DesktopSidebar;

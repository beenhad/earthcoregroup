import { cx } from '@utils';
import {
  FaFacebookF,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { TiSocialGooglePlus } from 'react-icons/ti';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from 'react-share';

const btnStyle = {
  className:
    'h-full aspect-square flex justify-center items-center border-l border-solid !border-gray-light',
  style: {
    borderLeft: '1px solid',
  },
};

const SharePanel = ({
  isOpenSharePanel,
  onClose,
}: {
  isOpenSharePanel: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={cx(
        'w-full h-full absolute top-0 left-0 z-10 bg-white duration-500 flex justify-end',
        isOpenSharePanel ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <LinkedinShareButton url={location.href} {...btnStyle}>
        <FaLinkedin />
      </LinkedinShareButton>
      <TwitterShareButton url={location.href} {...btnStyle}>
        <FaTwitter />
      </TwitterShareButton>
      <EmailShareButton url={location.href} {...btnStyle}>
        <TiSocialGooglePlus size={22} />
      </EmailShareButton>
      <PinterestShareButton url={location.href} media="/" {...btnStyle}>
        <FaPinterest />
      </PinterestShareButton>
      <FacebookShareButton url={location.href} {...btnStyle}>
        <FaFacebookF />
      </FacebookShareButton>
      <button {...btnStyle} onClick={onClose}>
        <IoClose size={18} />
      </button>
    </div>
  );
};

export default SharePanel;

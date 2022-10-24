import { APP_NAME } from '@config/constants';
import Image from 'next/image';
import Link from 'next/link';

const SiteLogo = () => {
  return (
    <Link href={'/'}>
      <a>
        <Image
          src={'/img/ecg-logo.png'}
          alt={APP_NAME}
          width={160}
          height={127}
        />
      </a>
    </Link>
  );
};

export default SiteLogo;

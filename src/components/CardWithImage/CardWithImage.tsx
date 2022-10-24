import { CardWithImageProps } from '@config/types';
import Image from 'next/image';

const CardWithImage = ({
  imgSrc,
  label,
  onClick,
  isActive,
}: CardWithImageProps) => {
  return (
    <a
      onClick={onClick}
      href="#info-section"
      className="relative overflow-hidden group cursor-pointer"
    >
      <div className="group-hover:scale-[1.05] duration-500 bg-gray-light">
        <Image
          width={430}
          height={280}
          src={imgSrc}
          alt={label}
          layout="responsive"
        />
      </div>

      {isActive && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[2]"></div>
      )}

      <div
        style={{
          backgroundImage: !isActive
            ? 'linear-gradient(180deg, rgba(41, 41, 41, 0) 5.92%, #292929 111.84%)'
            : undefined,
        }}
        className="absolute bottom-0 left-0 w-full h-10 lg:h-[76px] text-xs lg:text-2xl flex justify-center items-center text-white text-center z-[3]"
      >
        {label}
      </div>
    </a>
  );
};

export default CardWithImage;

import CardWithImage from '@components/CardWithImage';
import { CardWithImageProps } from '@config/types';
import useHeaderHeight from '@hooks/useHeaderHeight';
import { cx } from '@utils';
import { gsap } from 'gsap';
import { useCallback, useState } from 'react';

const CardsRendered = ({
  cards,
  className,
}: {
  cards: CardWithImageProps[];
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const { headerHeight } = useHeaderHeight();

  const activeInfo = cards.find((_, i) => i === activeIndex)?.info;

  const ActiveInfoBox = useCallback(() => {
    if (!activeInfo) return null;

    return <div className="animate_fade_in">{activeInfo}</div>;
  }, [activeInfo]);

  return (
    <>
      <div className={cx('grid grid-cols-2 gap-3 lg:gap-5', className)}>
        {cards.map((card, i) => (
          <CardWithImage
            {...card}
            onClick={() => {
              setActiveIndex(i);
              gsap.to(window, {
                duration: 1,
                ease: 'none',
                scrollTo: {
                  y: document.getElementById('infoBox')!,
                  offsetY: headerHeight + 100,
                },
              });
            }}
            isActive={i === activeIndex}
            key={i}
          />
        ))}
        <div className="scroll-mt-40 col-span-2 lg:col-span-1" id="infoBox">
          <ActiveInfoBox />
        </div>
      </div>
    </>
  );
};

export default CardsRendered;

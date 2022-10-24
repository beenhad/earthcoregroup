import CardWithImage from '@components/CardWithImage';
import { CardWithImageProps } from '@config/types';
import { useCallback, useState } from 'react';

const CardsRendered = ({ cards }: { cards: CardWithImageProps[] }) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const activeInfo = cards.find((_, i) => i === activeIndex)?.info;

  const ActiveInfoBox = useCallback(() => {
    if (!activeInfo) return null;

    return <div className="animate_fade_in">{activeInfo}</div>;
  }, [activeInfo]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 lg:gap-5">
        {cards.map((card, i) => (
          <CardWithImage
            {...card}
            onClick={() => setActiveIndex(i)}
            isActive={i === activeIndex}
            key={i}
          />
        ))}
        <div
          id="info-section"
          className="scroll-mt-40 col-span-2 lg:col-span-1"
        >
          <ActiveInfoBox />
        </div>
      </div>
    </>
  );
};

export default CardsRendered;

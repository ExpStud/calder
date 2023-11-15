import { FC, use, useEffect, useState } from "react";
import Image from "next/image";
import { FindNftByMintOutput } from "@metaplex-foundation/js";
import {
  CornerBottomLeftIcon,
  CornerBottomRightIcon,
  CornerTopLeftIcon,
  CornerTopRightIcon,
  ImageShimmer,
} from "@components";
import { motion } from "framer-motion";
import { GalleryNavigation, fastEnterAnimation } from "@constants";

interface Props {
  item: FindNftByMintOutput | undefined;
  index: number;
  isSelected: boolean;
  setSelectedGalleryItem?: (item: FindNftByMintOutput) => void;
  selectedNavItem: GalleryNavigation | undefined;
}

const GalleryImageItem: FC<Props> = (props: Props) => {
  const { item, index, isSelected, setSelectedGalleryItem, selectedNavItem } =
    props;

  const [dimensions, setDimensions] = useState<string>(
    "w-[300px] h-[300px] md:w-[326px] md:h-[326px]"
  );

  useEffect(() => {
    if (selectedNavItem === GalleryNavigation.Searchers) {
      setDimensions("w-[300px] h-[300px] md:w-[326px] md:h-[326px]");
    } else if (selectedNavItem === GalleryNavigation.Substance) {
      setDimensions("w-[300px] h-[391px] md:w-[326px] md:h-[425px]");
    }
  }, [selectedNavItem]);

  return (
    <div
      onClick={() =>
        setSelectedGalleryItem && item && setSelectedGalleryItem(item)
      }
      className={`relative flex-shrink-0 p-4 border border-color mb-4 overflow-hidden transition-300 ${
        isSelected
          ? "!border-gold !border-opacity-80 bg-gold bg-opacity-10"
          : ""
      }`}
    >
      <div className="overflow-hidden">
        {item?.json?.image ? (
          <Image
            src={item.json?.image}
            width={326}
            height={326}
            alt={`0${index}`}
            className={`${dimensions} transition-all duration-[650ms] hover:scale-[1.15] overflow-hidden cursor-pointer object-contain`}
          />
        ) : (
          <></>
        )}

        {!item?.json?.image && (
          <Image
            src="/images/placeholder.png"
            width={326}
            height={selectedNavItem === GalleryNavigation.Substance ? 425 : 326}
            alt={`0${index}`}
            className={`${dimensions}`}
            objectFit={"cover"}
          />
        )}
      </div>
      {isSelected && (
        <motion.div {...fastEnterAnimation}>
          <CornerBottomLeftIcon gold />
          <CornerBottomRightIcon gold />
          <CornerTopLeftIcon gold />
          <CornerTopRightIcon gold />
        </motion.div>
      )}
    </div>
  );
};

export default GalleryImageItem;

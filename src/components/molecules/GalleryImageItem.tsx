import { FC } from "react";
import Image from "next/image";
import { FindNftByMintOutput } from "@metaplex-foundation/js";
import {
  CornerBottomLeftIcon,
  CornerBottomRightIcon,
  CornerTopLeftIcon,
  CornerTopRightIcon,
} from "@components";
import { motion } from "framer-motion";
import { fastEnterAnimation } from "@constants";

interface Props {
  item: FindNftByMintOutput;
  index: number;
  isSelected: boolean;
  setSelectedGalleryItem: (item: FindNftByMintOutput) => void;
}

const GalleryImageItem: FC<Props> = (props: Props) => {
  const { item, index, isSelected, setSelectedGalleryItem } = props;

  return (
    <div
      onClick={() => setSelectedGalleryItem(item)}
      className={`relative flex-shrink-0 p-4 border border-color mb-4 overflow-hidden transition-300 ${
        isSelected
          ? "!border-gold !border-opacity-80 bg-gold bg-opacity-10"
          : ""
      }`}
    >
      {item.json?.image && (
        <div className="overflow-hidden">
          <Image
            src={item.json?.image}
            width={326}
            height={326}
            alt={`0${index}`}
            className="w-[300px] h-[300px] md:w-[326px] md:h-[326px] transition-all duration-[850ms] hover:scale-125 !ease-out overflow-hidden"
          />
        </div>
      )}
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

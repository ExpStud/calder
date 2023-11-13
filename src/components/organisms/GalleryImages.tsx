import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import { FindNftByMintOutput } from "@metaplex-foundation/js";
import { GalleryImageItem } from "@components";
import { searchers } from "@constants";
interface Props {
  metadata: FindNftByMintOutput[] | undefined;
  selectedGalleryItem: FindNftByMintOutput | undefined;
  setSelectedGalleryItem: (item: FindNftByMintOutput) => void;
}

const GalleryImages: FC<Props> = (props: Props) => {
  const { metadata, selectedGalleryItem, setSelectedGalleryItem } = props;

  return (
    <div className="flex self-start gap-0 w-[90vw] overflow-x-auto pt-6 pr-10">
      {Array.from({ length: searchers.length }, (_, index) => (
        <GalleryImageItem
          key={index}
          item={metadata?.[index]}
          index={index}
          isSelected={
            metadata
              ? selectedGalleryItem?.address === metadata?.[index]?.address
              : index === 0
          }
          setSelectedGalleryItem={setSelectedGalleryItem}
        />
      ))}
    </div>
  );
};

export default GalleryImages;

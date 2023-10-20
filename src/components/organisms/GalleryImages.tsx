import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import { FindNftByMintOutput } from "@metaplex-foundation/js";
import { GalleryImageItem } from "@components";

interface Props {
  metadata: FindNftByMintOutput[] | undefined;
  selectedGalleryItem: FindNftByMintOutput | undefined;
  setSelectedGalleryItem: (item: FindNftByMintOutput) => void;
}

const GalleryImages: FC<Props> = (props: Props) => {
  const { metadata, selectedGalleryItem, setSelectedGalleryItem } = props;

  return (
    <div className="flex self-start gap-0 w-[90vw] overflow-x-auto pt-6 cursor-pointer pr-10">
      {metadata?.map((item, index) => (
        <GalleryImageItem
          key={index}
          item={item}
          index={index}
          isSelected={selectedGalleryItem?.address === item.address}
          setSelectedGalleryItem={setSelectedGalleryItem}
        />
      ))}
    </div>
  );
};

export default GalleryImages;

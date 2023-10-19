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
    <div className="flex gap-0 w-screen overflow-x-scroll pt-6 cursor-pointer ml-4 md:ml-[12%] pr-10 lg:pr-32">
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

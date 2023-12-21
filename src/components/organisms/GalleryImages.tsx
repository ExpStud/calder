import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { FindNftByMintOutput } from "@metaplex-foundation/js";
import { GalleryImageItem } from "@components";
import { GalleryNavigation, searchers, substance } from "@constants";
import { Searchers, Substance } from "@types";
interface Props {
  metadata: FindNftByMintOutput[] | undefined;
  selectedGalleryItem: FindNftByMintOutput | undefined;
  setSelectedGalleryItem: (item: FindNftByMintOutput) => void;
  selectedNavItem: GalleryNavigation | undefined;
}

const GalleryImages: FC<Props> = (props: Props) => {
  const {
    metadata,
    selectedGalleryItem,
    setSelectedGalleryItem,
    selectedNavItem,
  } = props;

  const [data, setData] = useState<Searchers[] | Substance[]>();
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    switch (selectedNavItem) {
      case GalleryNavigation.Searchers:
        setData(searchers);
        break;
      case GalleryNavigation.Substance:
        setData(substance);
        break;
    }
  }, [selectedNavItem]);

  console.log("selectedNavItem", selectedNavItem);

  return (
    <div className="flex self-start gap-0 w-[90vw] overflow-x-auto pt-6 pr-10">
      {data &&
        Array.from({ length: data.length }, (_, index) => (
          <GalleryImageItem
            key={index}
            item={data[index]}
            metadata={metadata?.[index]}
            index={index}
            isSelected={
              metadata
                ? selectedGalleryItem?.address === metadata?.[index]?.address
                : index === 0
            }
            setSelectedGalleryItem={setSelectedGalleryItem}
            selectedNavItem={selectedNavItem}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
          />
        ))}
    </div>
  );
};

export default GalleryImages;

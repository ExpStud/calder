import { FC, useState } from "react";
import { ExchangeArtIcon, SearchIcon, ArrowIcon } from "@components";
import Image from "next/image";
interface Props {
  name: string;
  faction: string;
}
const GalleryItemBar: FC<Props> = (props: Props) => {
  const { name, faction } = props;
  const [openAssetDownload, setOpenAssetDownload] = useState<boolean>(false); //open asset download dropdown

  return (
    <div className="col-start border-t border-b border-color p-5 !bg-[#230D0E] w-full ">
      <h4 className="leading-none">{name}</h4>
      <p className="uppercase text-light-red font-teko-thin text-xl">
        Faction:
        <span className="text-custom-white pl-1">{faction}</span>
      </p>
      <div className="flex flex-wrap gap-3 cursor-pointer pt-8">
        {/* asset download dropdown button */}
        <div
          className={`flex button-transitions button-template connect-button !font-teko-thin !text-lg !w-[261px] !bg-light-red !bg-opacity-10 hover:!bg-opacity-20`}
        >
          <div className="download-icon">
            <Image
              src="/images/icons/download.svg"
              width="14"
              height="19"
              alt="Download"
            />
          </div>
          <p className="px-2">select asset to download</p>
          <ArrowIcon
            className="scale-125 mt-1.5 ml-2"
            animate={openAssetDownload}
            fill={"#EB6976"}
          />
        </div>
        <ExchangeArtIcon className="icon icon-transitions " />
        <SearchIcon className="icon icon-transitions " />
      </div>
    </div>
  );
};

export default GalleryItemBar;

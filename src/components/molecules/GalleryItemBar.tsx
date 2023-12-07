import { FC, useEffect, useRef, useState } from "react";
import {
  ExchangeArtIcon,
  SearchIcon,
  ArrowIcon,
  DropdownItem,
} from "@components";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  navigationVariants,
  searchers,
  dropdownItemsAnimations,
  GalleryNavigation,
  substance,
  findIndexByMint,
} from "@constants";
import { Searchers, Substance } from "@types";
import { useOutsideAlerter } from "@hooks";
import { FindNftByMintOutput, PublicKey } from "@metaplex-foundation/js";
interface Props {
  metadata: FindNftByMintOutput | undefined;
  mint: string | PublicKey;
  selectedNavItem: GalleryNavigation | undefined;
}
const GalleryItemBar: FC<Props> = (props: Props) => {
  const { metadata, mint, selectedNavItem } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [assets, setAssets] = useState<Searchers | undefined>(searchers[0]);
  const [subHeaderLabel, setSubHeaderLabel] = useState<string>("");
  const [subHeader, setSubHeader] = useState<string>("");
  // const [mint, setMint] = useState<string>("");

  const ref = useRef(null);
  useOutsideAlerter(ref, () => setOpen(false));

  const onSelect = (item: string, index: number) => {
    window.open(
      `/images/gallery/${selectedNavItem?.toLocaleLowerCase()}/${metadata?.name.replace(
        /[ .#]/g,
        ""
      )}/${item}`,
      "_blank"
    );
    setOpen(false);
  };

  //set dropdown content based on gallery type
  useEffect(() => {
    if (mint) {
      let _assets: Searchers | Substance | undefined;
      switch (selectedNavItem) {
        case GalleryNavigation.Searchers:
          _assets = searchers.find((item) => item.mint === mint);
          break;
        case GalleryNavigation.Substance:
          _assets = substance.find((item) => item.mint === mint);
          break;
      }

      if (_assets) setAssets(_assets);
    }
  }, [mint, selectedNavItem]);

  console.log("metadata ", metadata);
  // set content based on gallery type
  useEffect(() => {
    switch (selectedNavItem) {
      case GalleryNavigation.Searchers:
        setSubHeaderLabel("Faction");
        setSubHeader(
          metadata?.json?.attributes?.[1]?.trait_type ??
            (metadata?.json?.attributes?.[1]?.traitType as string) ??
            "THE COALITION"
        );
        break;
      case GalleryNavigation.Substance:
        setSubHeaderLabel("Cover");
        if (substance && metadata?.mint.address) {
          setSubHeader(`#${findIndexByMint(mint as string, substance) + 1}`);
        }
        break;
    }
  }, [
    metadata?.json?.attributes,
    metadata?.mint.address,
    mint,
    selectedNavItem,
  ]);

  return (
    <div className="col-start border-t border-b border-color p-5 !bg-[#230D0E] w-full ">
      <h4 className="leading-none">
        {metadata?.name ?? "#001 - THE ARTIFICER"}
      </h4>
      <p className="uppercase text-light-red font-teko-thin text-xl">
        {subHeaderLabel}:
        <span className="text-custom-white pl-1">{subHeader}</span>
      </p>
      <div className=" flex flex-wrap gap-3 cursor-pointer pt-8">
        {/* asset download dropdown button */}
        <div
          className={`relative flex button-transitions button-template connect-button !font-teko-thin !text-lg !w-[261px] !bg-light-red !bg-opacity-10 hover:!bg-opacity-20`}
          onClick={() => {
            if (assets) setOpen(!open);
          }}
          ref={ref}
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
            animate={open}
            fill={"#EB6976"}
          />
          {/* dropdown */}
          <AnimatePresence mode="wait">
            {open && (
              <motion.div
                className="absolute z-0 -left-[1px] top-[38px]  uppercase"
                key="dropdown-list"
                variants={navigationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div className="max-h-[300px] overflow-y-auto z-10 overflow-x-hidden">
                  {assets &&
                    Object.values(assets.assets).map((item: string, index) => (
                      <DropdownItem
                        item={item}
                        index={index}
                        handleClick={onSelect}
                        key={index}
                        variants={dropdownItemsAnimations}
                        className="!w-[261px] md:!w-[261px]"
                      />
                    ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ExchangeArtIcon className="icon icon-transitions " />
        <SearchIcon className="icon icon-transitions " />
      </div>
    </div>
  );
};

export default GalleryItemBar;

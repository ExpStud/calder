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
} from "@constants";
import { Searchers, Substance } from "@types";
import { useOutsideAlerter } from "@hooks";
interface Props {
  name: string;
  faction: string;
  mint: string | undefined;
}
const GalleryItemBar: FC<Props> = (props: Props) => {
  const { name, faction, mint } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [searcher, setSearcher] = useState<Searchers | undefined>(searchers[0]);

  const ref = useRef(null);
  useOutsideAlerter(ref, () => setOpen(false));

  const onSelect = (item: string, index: number) => {
    // handleClick(item, index);
    window.open(
      `/images/gallery/${name.replace(/[ .#]/g, "")}/${item}`,
      "_blank"
    );
    setOpen(false);
  };

  useEffect(() => {
    if (mint) {
      const _searcher = searchers.find((searcher) => searcher.mint === mint);
      setSearcher(_searcher);
    }
  }, [mint]);

  return (
    <div className="col-start border-t border-b border-color p-5 !bg-[#230D0E] w-full ">
      <h4 className="leading-none">{name}</h4>
      <p className="uppercase text-light-red font-teko-thin text-xl">
        Faction:
        <span className="text-custom-white pl-1">{faction ?? ""}</span>
      </p>
      <div className=" flex flex-wrap gap-3 cursor-pointer pt-8">
        {/* asset download dropdown button */}
        <div
          className={`relative flex button-transitions button-template connect-button !font-teko-thin !text-lg !w-[261px] !bg-light-red !bg-opacity-10 hover:!bg-opacity-20`}
          onClick={() => {
            if (searcher) setOpen(!open);
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
                  {searcher &&
                    Object.values(searcher.assets).map(
                      (item: string, index) => (
                        <DropdownItem
                          item={item}
                          index={index}
                          handleClick={onSelect}
                          key={index}
                          variants={dropdownItemsAnimations}
                          className="!w-[261px] md:!w-[261px]"
                        />
                      )
                    )}
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

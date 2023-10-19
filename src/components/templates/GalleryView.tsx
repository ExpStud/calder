import { FC, useCallback, useEffect, useState } from "react";
import {
  TabNavigation,
  Divider,
  GallerySorting,
  GalleryImages,
} from "@components";
import { AnimatePresence, motion } from "framer-motion";
import {
  galleryNav,
  fastExitAnimation,
  GalleryNavigation,
  searchers,
} from "@constants";
import { useSearchParams } from "next/navigation";
import { findNftByMint } from "@utils";
import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { FindNftByMintOutput } from "@metaplex-foundation/js";
import Image from "next/image";

const GalleryView: FC = () => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>();
  const [metadata, setMetadata] = useState<FindNftByMintOutput[]>();
  const [selectedGalleryItem, setSelectedGalleryItem] =
    useState<FindNftByMintOutput>();

  const queryParams = useSearchParams();
  const { connection } = useConnection();

  const handleDropdownSelect = (item: string, index: number) => {
    setSelectedNavItem(galleryNav[index]);
  };

  //fetch nft metadata for the needed gallery display
  const fetchNfts = useCallback(async () => {
    if (selectedNavItem === GalleryNavigation.Searchers) {
      //map the searchers array into an array of promises
      const nftPromises = searchers.map(async (searcher) => {
        const nft = await findNftByMint(
          connection,
          new PublicKey(searcher.mint)
        );
        return nft;
      });
      //await all the promises and collect the results
      const nftResults = await Promise.all(nftPromises);
      //filter out null values and set state
      const filteredNfts = nftResults.filter(
        (nft) => nft !== null
      ) as FindNftByMintOutput[];
      setMetadata(filteredNfts);
    }
  }, [connection, selectedNavItem]);

  useEffect(() => {
    fetchNfts();
  }, [fetchNfts]);

  //set selected nav item based on query params
  useEffect(() => {
    const id = queryParams.get("id");
    if (id) {
      //check GalleryNavigation items for id match
      const tab = Object.values(GalleryNavigation).find(
        (item) => item.toLowerCase() === id
      );
      if (tab) {
        setSelectedNavItem(tab);
        return;
      }
    }
    //if no matches set to first item
    setSelectedNavItem(galleryNav[0]);
  }, [queryParams]);

  useEffect(() => {
    if (metadata) {
      setSelectedGalleryItem(metadata[0]);
    }
  }, [metadata]);

  return (
    <div className="page-centered">
      <Divider
        showLeftTipHighlight
        showLeftTip={false}
        className="mt-14 mb-3"
      />
      <div className="flex flex-col lg:flex-row justify-between items-center w-full pt-4 pb-14 gap-3">
        <h2>Gallery</h2>
        {selectedNavItem && (
          <TabNavigation
            selectedItem={selectedNavItem}
            setSelectedItem={setSelectedNavItem}
            // navItems={galleryNav}
            navItems={Object.values(GalleryNavigation) as string[]}
          />
        )}
      </div>
      <GallerySorting
        selectedNavItem={selectedNavItem}
        handleDropdownSelect={handleDropdownSelect}
      />
      {/* images */}
      <GalleryImages
        metadata={metadata}
        setSelectedGalleryItem={setSelectedGalleryItem}
        selectedGalleryItem={selectedGalleryItem}
      />
      {/* page content */}
      <div className="-z-10 w-full py-6">
        <AnimatePresence mode="wait">
          {selectedNavItem === GalleryNavigation.Searchers &&
            selectedGalleryItem && (
              <motion.div
                key={GalleryNavigation.Searchers}
                {...fastExitAnimation}
                className="col-start md:w-[400px] gap-4 border-t border-b border-color p-4 !bg-[#230D0E] !bg-opacity-100"
              >
                <div className="col-start">
                  <h4 className="leading-none">{selectedGalleryItem.name}</h4>
                  <p className="uppercase text-light-red font-teko-thin text-xl">
                    Faction:
                    <span className="text-custom-white pl-1">
                      {selectedGalleryItem.json?.attributes?.[1].trait_type}
                    </span>
                  </p>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryView;

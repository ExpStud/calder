import { FC, useCallback, useEffect, useState } from "react";
import {
  AboutNavigation,
  AboutOverview,
  AboutRoadmap,
  AboutSearchers,
  AboutSubstance,
  AboutTeam,
  Divider,
  Dropdown,
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

const GalleryView: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const [metadata, setMetadata] = useState<FindNftByMintOutput[]>();

  const queryParams = useSearchParams();
  const { connection } = useConnection();

  const handleDropdownSelect = (item: string, index: number) => {
    setSelectedItem(galleryNav[index]);
  };

  //fetch nft metadata for the needed gallery display
  const fetchNftss = useCallback(async () => {
    if (selectedItem === GalleryNavigation.Searchers) {
      await Promise.all(
        searchers.map(async (searcher) => {
          let nfts: FindNftByMintOutput[] = [];
          const nft: FindNftByMintOutput | null = await findNftByMint(
            connection,
            new PublicKey(searcher.mint)
          );
          if (nft) nfts.push(nft);
          setMetadata(nfts);
        })
      );
    }
  }, [connection, selectedItem]);

  //fetch nft metadata for the needed gallery display
  const fetchNfts = useCallback(async () => {
    if (selectedItem === GalleryNavigation.Searchers) {
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
  }, [connection, selectedItem]);

  useEffect(() => {
    fetchNfts();
  }, [fetchNfts]);

  //set selected nav item based on query params
  useEffect(() => {
    const id = queryParams.get("id");
    if (id) {
      const tab = Object.values(GalleryNavigation).find(
        (item) => item.toLowerCase() === id
      ); //galleryNav.find((item) => item.toLowerCase() === id);
      console.log(id, galleryNav, tab);
      if (tab) {
        setSelectedItem(tab);
      } else {
        setSelectedItem(galleryNav[0]);
      }
    } else {
      setSelectedItem(galleryNav[0]);
    }
  }, [queryParams]);

  return (
    <div className="page-centered">
      <Divider
        showLeftTipHighlight
        showLeftTip={false}
        className="mt-14 mb-3"
      />
      <div className="flex flex-col lg:flex-row justify-between items-center w-full pt-4 pb-14 gap-3">
        <h2>Gallery</h2>
        {selectedItem && (
          <AboutNavigation
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            // navItems={galleryNav}
            navItems={Object.values(GalleryNavigation) as string[]}
          />
        )}
      </div>
      <div className="col-start w-full">
        <AnimatePresence mode="wait">
          {selectedItem === GalleryNavigation.Searchers && (
            <motion.div key={0} {...fastExitAnimation}>
              <Dropdown
                items={galleryNav}
                label={"All Factions"}
                handleClick={handleDropdownSelect}
              />
            </motion.div>
          )}
          {selectedItem === GalleryNavigation.Comic && (
            <motion.div
              key={1}
              {...fastExitAnimation}
              className="row-start w-full gap-4"
            >
              <Dropdown
                items={galleryNav}
                label={"Covers"}
                handleClick={handleDropdownSelect}
              />
              <Dropdown
                items={galleryNav}
                label={"Mythic"}
                handleClick={handleDropdownSelect}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="-z-10">
        {/* <AnimatePresence mode="wait">
          {selectedItem === galleryNav[0] && <AboutOverview />}
          {selectedItem === galleryNav[1] && <AboutSubstance />}
          {selectedItem === galleryNav[2] && <AboutSearchers />}
          {selectedItem === galleryNav[3] && <AboutRoadmap />}
          {selectedItem === galleryNav[4] && <AboutTeam />}
        </AnimatePresence> */}
      </div>
    </div>
  );
};

export default GalleryView;

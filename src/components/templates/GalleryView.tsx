import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  TabNavigation,
  Divider,
  GallerySorting,
  GalleryImages,
  GalleryItemLore,
  GalleryItemBar,
} from "@components";
import { AnimatePresence, motion } from "framer-motion";
import {
  galleryNav,
  fastExitAnimation,
  GalleryNavigation,
  searchers,
  Factions,
  substance,
} from "@constants";
import { useSearchParams } from "next/navigation";
import { PublicKey } from "@solana/web3.js";
import { FindNftByMintOutput } from "@metaplex-foundation/js";
import { Searchers, Substance } from "@types";

const GalleryView: FC = () => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>(); //tab navigation for page
  const [metadata, setMetadata] = useState<FindNftByMintOutput[]>(); //nft metadata for gallery
  const [searcherseMetadata, setSearchersMetadata] =
    useState<FindNftByMintOutput[]>();
  const [substanceMetadata, setSubstanceMetadata] =
    useState<FindNftByMintOutput[]>();
  const [filteredMetadata, setFilteredMetadata] = useState<
    FindNftByMintOutput[] | null
  >(null);
  const [selectedGalleryItem, setSelectedGalleryItem] =
    useState<FindNftByMintOutput>(); //selected nft metadata
  const [selectedFaction, setSelectedFaction] = useState<Factions | undefined>(
    undefined
  ); //selected faction for searchers

  const queryParams = useSearchParams();

  const handleDropdown = (item: string) => {
    //reset selected faction if "All Factions" or selectedFaction is selected
    if (
      item === "All Factions" ||
      item.toLocaleLowerCase() === selectedFaction?.toLocaleLowerCase()
    ) {
      setSelectedFaction(undefined);
      return;
    }

    // Find the corresponding enum value for the selected item
    const selectedFactionEnum = Object.values(Factions).find((faction) => {
      return faction.toLowerCase() === item.toLocaleLowerCase();
    });

    if (selectedFactionEnum) {
      setSelectedFaction(selectedFactionEnum);
    }
  };

  //fetch nft metadata for the specified gallery display
  const fetchData = useCallback(async () => {
    try {
      let mintAddresses: string[] = [];
      let metadataState: Dispatch<SetStateAction<any>> | null = null;

      switch (selectedNavItem) {
        case GalleryNavigation.Searchers:
          mintAddresses = searchers.map((searcher) => searcher.mint);
          metadataState = setSearchersMetadata;
          break;
        case GalleryNavigation.Substance:
          mintAddresses = substance.map((searcher) => searcher.mint);
          metadataState = setSubstanceMetadata;
          break;
      }

      // Check if metadataState has a value and if it already has data
      if (metadataState && metadataState.length > 0) {
        return;
      }

      const response = await fetch(
        `/api/fetchNfts?mintArray=${encodeURIComponent(
          JSON.stringify(mintAddresses)
        )}`
      );

      if (!response.ok) {
        throw new Error("1. Failed to fetch data");
      }
      const data = await response.json();

      if (metadataState) {
        metadataState(data);
      }
      // setMetadata(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [selectedNavItem]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    switch (selectedNavItem) {
      case GalleryNavigation.Searchers:
        setMetadata(searcherseMetadata);
        break;
      case GalleryNavigation.Substance:
        setMetadata(substanceMetadata);
        break;
    }
  }, [searcherseMetadata, selectedNavItem, substanceMetadata]);

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

  //filter metadata based on selected faction
  const filterMetadata = useCallback(() => {
    if (metadata && selectedFaction) {
      const filteredNfts = metadata.filter((nft) => {
        if (nft?.json && nft?.json?.attributes) {
          return nft?.json?.attributes.some(
            (attr) =>
              attr?.trait_type === selectedFaction ||
              attr?.traitType === selectedFaction
          );
        }
      });
      setFilteredMetadata(filteredNfts);
    } else {
      setFilteredMetadata(null);
    }
  }, [metadata, selectedFaction]);

  useEffect(() => {
    filterMetadata();
  }, [filterMetadata]);

  //set selected gallery item to first item in filtered metadata
  useEffect(() => {
    if (filteredMetadata) {
      setSelectedGalleryItem(filteredMetadata[0]);
    }
  }, [filteredMetadata]);

  //reset highlighted gallery item when nav item changes
  useEffect(() => {
    if (metadata) {
      setSelectedGalleryItem(metadata[0]);
    }
  }, [metadata, selectedFaction]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-20 px-4 md:px-[10%] z-0">
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
            navItems={Object.values(GalleryNavigation)}
          />
        )}
      </div>
      <div className="z-50 row-start w-full">
        <GallerySorting
          selectedNavItem={selectedNavItem}
          handleDropdown={handleDropdown}
          selectedFaction={selectedFaction}
        />
      </div>
      {/* images */}
      <GalleryImages
        metadata={filteredMetadata ?? metadata}
        setSelectedGalleryItem={setSelectedGalleryItem}
        selectedGalleryItem={selectedGalleryItem}
      />
      {/* page content */}
      <div className="-z-10 w-full py-6">
        <AnimatePresence mode="wait">
          {selectedNavItem === GalleryNavigation.Searchers && (
            <motion.div
              key={GalleryNavigation.Searchers}
              {...fastExitAnimation}
              className="col-start gap-4 !bg-opacity-100 w-full md:w-[680px]"
            >
              <GalleryItemBar
                name={selectedGalleryItem?.name ?? "#001 - THE ARTIFICER"}
                faction={
                  selectedGalleryItem?.json?.attributes?.[1]?.trait_type ??
                  (selectedGalleryItem?.json?.attributes?.[1]
                    ?.traitType as string) ??
                  "THE COALITION"
                }
                mint={
                  selectedGalleryItem?.mint.address instanceof PublicKey
                    ? selectedGalleryItem?.mint?.address.toBase58()
                    : ""
                }
              />
              <GalleryItemLore
                description={
                  selectedGalleryItem?.json?.description ??
                  "The Artificer, a mysterious figure residing in the depths of the Undercity within the protective walls of the Shrike, a fortress built by the Coalition. A master of cybernetic augmentation, upgrading those who want that little bit extra that isn't legally done. He was indirectly one of the founding members of the Coalition, formed to fight back against the authorities trying to decimate the Undercities population. Never showing up to any of the councils, spending most of the time upgrading those who would fight back against the topside foes. The Artificer is a mysterious man, not really seen by many, and no one knows his true name. He is always lurking in the back of his shop with IGOR managing the front. His identity is an enigma to all but his most trusted confidants. Whispers of his unparalleled craftsmanship echo through the underbelly of Vulture, drawing those in need of his services, while his reputation as a man who wields the power to reshape lives hangs heavy in the air."
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryView;

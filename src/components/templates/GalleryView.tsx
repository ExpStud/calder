import { FC, useEffect, useState } from "react";
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
import { galleryNav, fastExitAnimation } from "@constants";
import { useSearchParams } from "next/navigation";

const GalleryView: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const queryParams = useSearchParams();

  //set selected item based on query params
  useEffect(() => {
    const id = queryParams.get("id");
    if (id) {
      galleryNav.map((item, index) => {
        if (item.toLowerCase() === id) {
          setSelectedItem(galleryNav[index]);
        }
      });
    } else {
      setSelectedItem(galleryNav[0]);
    }
  }, [queryParams]);

  const handleDropdownSelect = (item: string, index: number) => {
    setSelectedItem(galleryNav[index]);
  };

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
            navItems={galleryNav}
          />
        )}
      </div>
      <div className="col-start w-full">
        <AnimatePresence mode="wait">
          {selectedItem === "Searchers" && (
            <motion.div key={0} {...fastExitAnimation}>
              <Dropdown
                items={galleryNav}
                label={"All Factions"}
                handleClick={handleDropdownSelect}
              />
            </motion.div>
          )}
          {selectedItem === "Comic" && (
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

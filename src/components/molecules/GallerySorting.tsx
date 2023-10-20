import { FC } from "react";
import { Dropdown } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import {
  galleryNav,
  fastExitAnimation,
  GalleryNavigation,
  Factions,
} from "@constants";

interface Props {
  selectedNavItem: string | undefined;
  handleDropdown: (item: string, index: number) => void;
  selectedFaction: Factions | undefined;
}
const GallerySorting: FC<Props> = (props: Props) => {
  const { selectedNavItem, selectedFaction, handleDropdown } = props;

  return (
    <div className="col-start w-full">
      <AnimatePresence mode="wait">
        {selectedNavItem === GalleryNavigation.Searchers && (
          <motion.div key={0} {...fastExitAnimation}>
            <Dropdown
              items={
                selectedFaction
                  ? ["All Factions", ...Object.values(Factions)]
                  : Object.values(Factions)
              }
              label={selectedFaction ?? "All Factions"}
              handleClick={handleDropdown}
            />
          </motion.div>
        )}
        {selectedNavItem === GalleryNavigation.Comic && (
          <motion.div
            key={1}
            {...fastExitAnimation}
            className="row-start w-full gap-4"
          >
            <Dropdown
              items={galleryNav}
              label={"Covers"}
              handleClick={handleDropdown}
            />
            <Dropdown
              items={galleryNav}
              label={"Mythic"}
              handleClick={handleDropdown}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GallerySorting;

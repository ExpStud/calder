import { FC } from "react";
import { Dropdown } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { galleryNav, fastExitAnimation, GalleryNavigation } from "@constants";

interface Props {
  selectedNavItem: string | undefined;
  handleDropdownSelect: (item: string, index: number) => void;
}
const GallerySorting: FC<Props> = (props: Props) => {
  const { selectedNavItem, handleDropdownSelect } = props;

  return (
    <div className="col-start w-full">
      <AnimatePresence mode="wait">
        {selectedNavItem === GalleryNavigation.Searchers && (
          <motion.div key={0} {...fastExitAnimation}>
            <Dropdown
              items={galleryNav}
              label={"All Factions"}
              handleClick={handleDropdownSelect}
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
  );
};

export default GallerySorting;

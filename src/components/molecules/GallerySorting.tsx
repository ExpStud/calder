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
      {selectedNavItem === GalleryNavigation.Searchers && (
        <Dropdown
          items={
            selectedFaction
              ? ["All Factions", ...Object.values(Factions)]
              : Object.values(Factions)
          }
          label={selectedFaction ?? "All Factions"}
          handleClick={handleDropdown}
        />
      )}
      {selectedNavItem === GalleryNavigation.Substance && (
        <div className="row-start w-full gap-4">
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
        </div>
      )}
    </div>
  );
};

export default GallerySorting;

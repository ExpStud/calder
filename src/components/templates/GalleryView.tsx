import { FC, useEffect, useState } from "react";
import { AboutNavigation, Divider, Dropdown } from "@components";
import { AnimatePresence } from "framer-motion";
import { galleryNav } from "@constants";
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
      <Dropdown
        items={galleryNav}
        label={selectedItem ?? ""}
        handleClick={handleDropdownSelect}
      />

      {/* <AnimatePresence mode="wait">
        {selectedItem === galleryNav[0] && <AboutOverview />}
        {selectedItem === galleryNav[1] && <AboutSubstance />}
        {selectedItem === galleryNav[2] && <AboutSearchers />}
        {selectedItem === galleryNav[3] && <AboutRoadmap />}
        {selectedItem === galleryNav[4] && <AboutTeam />}
      </AnimatePresence> */}
    </div>
  );
};

export default GalleryView;

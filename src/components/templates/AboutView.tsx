import { FC, useEffect, useState } from "react";
import {
  AboutNavigation,
  AboutOverview,
  AboutRoadmap,
  AboutSearchers,
  AboutSubstance,
  AboutTeam,
} from "@components";
import Divider from "../atoms/Divider";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation, navItems } from "@constants";
import { useSearchParams } from "next/navigation";

const AboutView: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const queryParams = useSearchParams();

  //set selected item based on query params
  useEffect(() => {
    const id = queryParams.get("id");
    if (id) {
      navItems.map((item, index) => {
        if (item.toLowerCase() === id) {
          setSelectedItem(navItems[index]);
        }
      });
    } else {
      setSelectedItem(navItems[0]);
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
        <h2>About</h2>
        {selectedItem && (
          <AboutNavigation
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            navItems={navItems}
          />
        )}
      </div>

      <AnimatePresence mode="wait">
        {selectedItem === navItems[0] && <AboutOverview />}
        {selectedItem === navItems[1] && <AboutSubstance />}
        {selectedItem === navItems[2] && <AboutSearchers />}
        {selectedItem === navItems[3] && <AboutRoadmap />}
        {selectedItem === navItems[4] && <AboutTeam />}
      </AnimatePresence>
    </div>
  );
};

export default AboutView;

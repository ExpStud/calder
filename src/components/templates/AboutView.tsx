import { FC, useEffect, useState } from "react";
import {
  TabNavigation,
  AboutOverview,
  AboutRoadmap,
  AboutSearchers,
  AboutSubstance,
  AboutTeam,
} from "@components";
import Divider from "../atoms/Divider";
import { AnimatePresence } from "framer-motion";
import { navItems } from "@constants";
import { useSearchParams } from "next/navigation";

const AboutView: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const queryParams = useSearchParams();

  //set selected item based on query params
  useEffect(() => {
    const id = queryParams.get("id");
    if (id) {
      const tab = navItems.find((item) => item.toLowerCase() === id);
      if (tab) {
        setSelectedItem(tab);
        return;
      }
    }
    setSelectedItem(navItems[0]);
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
          <TabNavigation
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

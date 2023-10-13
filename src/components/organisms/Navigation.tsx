import { FC, useEffect, useState } from "react";
import {
  CloseIcon,
  CornerTopLeftIcon,
  CornerTopRightIcon,
  MenuIcon,
  NavigationContent,
  NavigationDropdown,
} from "@components";
import { fastExitAnimation, navigation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@types";
import { useRouter } from "next/router";

const Navigation: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedNavigation, setSelectedNavigation] = useState<Navigation>();

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/") setSelectedNavigation(navigation[0]);
    else if (router.asPath.includes("/about"))
      setSelectedNavigation(navigation[1]);
    else if (router.asPath.includes("/gallery"))
      setSelectedNavigation(navigation[2]);
    else if (router.asPath.includes("/buy"))
      setSelectedNavigation(navigation[4]);
  }, [router.asPath]);

  return (
    <div className="relative">
      <div className="navigation button-template !bg-red-020 !bg-opacity-70">
        <CornerTopLeftIcon />
        <CornerTopRightIcon />
        {/* center content */}
        {selectedNavigation && (
          <NavigationContent navigation={selectedNavigation} showSymbol />
        )}

        {/* icons */}
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="menu-icon"
              onClick={() => setOpen(true)}
              className="cursor-pointer "
              {...fastExitAnimation}
            >
              <MenuIcon />
            </motion.div>
          ) : (
            <motion.div
              onClick={() => setOpen(false)}
              className="cursor-pointer z-[100]"
              {...fastExitAnimation}
            >
              <CloseIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <NavigationDropdown
            items={navigation}
            selectedItem={selectedNavigation}
            close={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default Navigation;

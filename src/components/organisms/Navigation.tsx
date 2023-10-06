import { FC, useEffect, useState } from "react";
import {
  CloseIcon,
  MenuIcon,
  NavigationContent,
  NavigationDropdown,
} from "@components";
import { fastExitAnimation, navigation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@types";
import Image from "next/image";
import { useRouter } from "next/router";

const Navigation: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedNavigation, setSelectedNavigation] = useState<Navigation>();

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/") setSelectedNavigation(navigation[0]);
    else if (router.asPath === "/about") setSelectedNavigation(navigation[1]);
    else if (router.asPath === "/gallery") setSelectedNavigation(navigation[2]);
    else if (router.asPath === "/buy") setSelectedNavigation(navigation[4]);
  }, [router.asPath]);

  return (
    <div className="relative">
      <div className="navigation button-template !bg-red-020 !bg-opacity-70">
        {/* corner pieces */}
        <Image
          src="/images/buttons/top-left-corner.svg"
          alt="Left Corner"
          width={8}
          height={8}
          className="absolute top-0 left-0"
        />
        <Image
          src="/images/buttons/top-right-corner.svg"
          alt="Right Corner"
          width={8}
          height={8}
          className="absolute top-0 right-0"
        />
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

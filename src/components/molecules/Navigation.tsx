import { FC, useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@components";
import { fastExitAnimation, navigation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@types";
import Image from "next/image";
import { useRouter } from "next/router";

const Navigation: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [selectedNavigation, setSelectedNavigation] = useState<Navigation>();

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/") setSelectedNavigation(navigation[0]);
    else if (router.asPath === "/about") setSelectedNavigation(navigation[1]);
    else if (router.asPath === "/gallery") setSelectedNavigation(navigation[2]);
    else if (router.asPath === "/buy") setSelectedNavigation(navigation[4]);
  }, [router.asPath]);

  return (
    <div className="relative ">
      <div className="navigation button-template">
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
          <div className="flex items-center gap-6 h-full">
            <p className="navigation-symbol">{selectedNavigation.symbol}</p>
            <p className="uppercase text-light-red font-teko-thin pt-1 text-2xl tracking-wider w-[90px]">
              <span className="opacity-60">0{selectedNavigation.id + 1}</span>{" "}
              {selectedNavigation.name}
            </p>
            <p className="uppercase font-teko-thin pt-1 text-2xl tracking-wider pl-4">
              {selectedNavigation.label}
            </p>
          </div>
        )}

        {/* icons */}
        <AnimatePresence mode="wait">
          {!openMenu ? (
            <motion.div
              key="menu-icon"
              onClick={() => setOpenMenu(true)}
              className="cursor-pointer "
              {...fastExitAnimation}
            >
              <MenuIcon />
            </motion.div>
          ) : (
            <motion.div
              onClick={() => setOpenMenu(false)}
              className="cursor-pointer z-[100]"
              {...fastExitAnimation}
            >
              <CloseIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {openMenu && (
        <NavigationDropdown
          items={navigation}
          selectedItem={selectedNavigation}
        />
      )}
    </div>
  );
};

const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
interface NavigationDropdownProps {
  items: Navigation[];
  selectedItem?: Navigation;
}
const NavigationDropdown: FC<NavigationDropdownProps> = (
  props: NavigationDropdownProps
) => {
  const { items, selectedItem } = props;

  return (
    <motion.div
      className="absolute w-32"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item: Navigation, index) => {
        if (selectedItem && selectedItem.id === index) return <></>;
        return (
          <motion.div
            key={index}
            className={`navigation-dropdown-item ${
              index + 1 === items.length ? "border-b" : ""
            }`}
            variants={itemVariants}
          >
            <div className="w-[75px]"></div>
            <p className="uppercase text-light-red font-teko-thin pt-1 text-2xl tracking-wider w-[90px]">
              <span className="opacity-60">0{item.id + 1}</span> {item.name}
            </p>
            <p className="uppercase font-teko-thin pt-1 text-2xl tracking-wider pl-4">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
export default Navigation;

import { FC, useRef } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@types";
import { useRouter } from "next/router";
import { navigationVariants, navigationItemVariants } from "@constants";
import { DiscordIcon, NavigationContent, TwitterIcon } from "@components";
import { useOutsideAlerter } from "@hooks";
import Image from "next/image";

interface NavigationDropdownProps {
  items: Navigation[];
  selectedItem?: Navigation;
  close: () => void;
}
const NavigationDropdown: FC<NavigationDropdownProps> = (
  props: NavigationDropdownProps
) => {
  const { items, selectedItem, close } = props;
  const router = useRouter();

  const ref = useRef(null);
  useOutsideAlerter(ref, () => close());

  const handleClick = (item: Navigation) => {
    if (item.href.includes("https")) window.open(item.href, "_blank");
    else router.push(item.href);
  };

  return (
    <motion.div
      className="absolute"
      variants={navigationVariants}
      initial="hidden"
      animate="visible"
      ref={ref}
    >
      <div className="navigation-dropdown">
        {items.map((item: Navigation, index) => {
          if (selectedItem && selectedItem.id === index) return <></>;
          return (
            <motion.div
              key={index}
              className={`navigation-dropdown-item`}
              variants={navigationItemVariants}
              onClick={() => handleClick(item)}
            >
              <NavigationContent navigation={item} />
            </motion.div>
          );
        })}
      </div>
      <motion.div
        className={`navigation-container px-4 bg-red-010 flex items-center justify-between h-full overflow-hidden border border-light-red border-opacity-20`}
        variants={navigationItemVariants}
        key="bottom"
      >
        <Image
          src="/images/iso.png"
          alt="ISO"
          width={247}
          height={103}
          className="overflow-hidden -mt-20"
        />
        <div className="flex items-center gap-1 ">
          <TwitterIcon />
          <DiscordIcon />
        </div>
      </motion.div>
    </motion.div>
  );
};
export default NavigationDropdown;

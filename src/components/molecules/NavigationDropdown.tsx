import { FC, useRef } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@types";
import { useRouter } from "next/router";
import { navigationVariants, navigationItemVariants } from "@constants";
import { NavigationContent } from "@components";
import { useOutsideAlerter } from "@hooks";

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
      className="absolute "
      variants={navigationVariants}
      initial="hidden"
      animate="visible"
      ref={ref}
      // onMouseLeave={() => close()}
    >
      {items.map((item: Navigation, index) => {
        if (selectedItem && selectedItem.id === index) return <></>;
        return (
          <motion.div
            key={index}
            className={`navigation-dropdown-item ${
              index + 1 === items.length ? "border-b" : ""
            }`}
            variants={navigationItemVariants}
            onClick={() => handleClick(item)}
          >
            <NavigationContent navigation={item} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};
export default NavigationDropdown;

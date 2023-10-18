import {
  dropdownAnimations,
  navigationVariants,
  dropdownItemsAnimations,
} from "@constants";
import { DropdownButton, DropdownItem } from "@components";
import { FC, HTMLAttributes, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideAlerter } from "@hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {
  handleClick: (item: string, index: number) => void;
  label: string;
  items: string[];
  disabled?: boolean;
}

const Dropdown: FC<Props> = (props: Props) => {
  const { handleClick, label, items, disabled = false, className } = props;

  const [didHover, setDidHover] = useState<boolean>(false);

  const ref = useRef(null);
  useOutsideAlerter(ref, () => setDidHover(false));

  const onSelect = (item: string, index: number) => {
    handleClick(item, index);
    setDidHover(false);
  };

  return (
    <div
      // onMouseEnter={() => {
      //   if (!disabled) setDidHover(true);
      // }}
      // onMouseLeave={() => {
      //   if (!disabled) setDidHover(false);
      // }}
      onClick={() => {
        if (!disabled) setDidHover(!didHover);
      }}
      className={`relative z-10 ${className}`}
      ref={ref}
    >
      <DropdownButton open={didHover} label={label} disabled={disabled} />
      <AnimatePresence mode="wait">
        {didHover && (
          <motion.div
            className="absolute z-0 left-0 uppercase"
            key="dropdown-list"
            // variants={dropdownAnimations}
            // initial="hidden"
            // animate="show"
            variants={navigationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="max-h-[300px] overflow-y-auto z-10">
              {items &&
                items.map((item: string, index) => (
                  <DropdownItem
                    item={item}
                    index={index}
                    handleClick={onSelect}
                    key={index}
                    variants={dropdownItemsAnimations}
                  />
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;

import { dropdownAnimations, dropdownItemsAnimations } from "@constants";
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
      className={`relative ${className}`}
      ref={ref}
    >
      <DropdownButton isPlaying={didHover} label={label} disabled={disabled} />
      <AnimatePresence mode="wait">
        {didHover && (
          <motion.div
            className="absolute z-10 left-1/2 transform -translate-x-1/2 uppercase"
            key="dropdown-list"
            variants={dropdownAnimations}
            initial="hidden"
            animate="show"
          >
            <motion.ul className="rounded-sm shadow max-h-[250px] w-screen md:w-96 overflow-y-auto z-10 font-secondary bg-mid-gray left-1/2 transform -translate-x-1/2">
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
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;

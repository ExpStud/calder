import { FC } from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  item: string;
  index: number;
  handleClick: (item: string, index: number) => void;
  variants: Variants;
}

const DropdownItem: FC<Props> = (props: Props) => {
  const { item, index, handleClick, variants } = props;

  return (
    <motion.li
      key={index}
      className={`text-center p-2 cursor-pointer flex items-center justify-center bg-transparent active:bg-custom-black text-2xl transition-all duration-300 bg-mid-gray hover:bg-custom-dark-gray`}
      onClick={() => handleClick(item, index)}
    >
      <motion.span variants={variants}>{item}</motion.span>
    </motion.li>
  );
};

export default DropdownItem;

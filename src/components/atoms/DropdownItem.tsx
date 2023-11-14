import { FC } from "react";
import { motion, Variants } from "framer-motion";
import { navigationItemVariants } from "@constants";

interface Props {
  item: string;
  index: number;
  handleClick: (item: string, index: number) => void;
  variants: Variants;
  className?: string;
}

const DropdownItem: FC<Props> = (props: Props) => {
  const { item, index, handleClick, variants, className } = props;

  return (
    <motion.div
      key={index}
      variants={navigationItemVariants}
      className={`text-center p-2 cursor-pointer flex button-template connect-button !bg-red-010 !bg-opacity-100 hover:!bg-red-020  hover:!bg-opacity-100 !text-sm md:!text-base !w-[140px] md:!w-[200px] h-[38px] 
      ${className}`}
      onClick={() => handleClick(item, index)}
    >
      <motion.span variants={variants}>{item}</motion.span>
    </motion.div>
  );
};

export default DropdownItem;

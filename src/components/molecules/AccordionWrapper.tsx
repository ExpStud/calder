import { FC } from "react";
import { motion } from "framer-motion";
import {
  CornerBottomLeftIcon,
  CornerBottomRightIcon,
  CornerTopLeftIcon,
  CornerTopRightIcon,
} from "@components";

interface Props {
  children: React.ReactNode;
  animate: boolean;
}
const AccordionWrapper: FC<Props> = (props: Props) => {
  const { children, animate } = props;
  return (
    <motion.div
      className="relative p-4 bg-background-grid"
      initial={{ opacity: 0 }}
      animate={{
        opacity: animate ? 1 : 0,
      }}
      transition={{
        duration: animate ? 1 : 0.3,
        ease: "easeInOut",
        delay: animate ? 0.3 : 0,
      }}
    >
      <CornerTopRightIcon />
      <CornerTopLeftIcon />
      <CornerBottomLeftIcon />
      <CornerBottomRightIcon />
      {children}
    </motion.div>
  );
};

export default AccordionWrapper;

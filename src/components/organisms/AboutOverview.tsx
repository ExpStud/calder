import { FC } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation, navItems, substanceItems } from "@constants";

const AboutOverview: FC = () => {
  return (
    <motion.div key={navItems[0]} {...fastExitAnimation}>
      {navItems[0]}
    </motion.div>
  );
};

export default AboutOverview;

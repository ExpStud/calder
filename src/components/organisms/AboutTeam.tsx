import { FC, useState } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation, navItems, team } from "@constants";
import { TeamSelect, TeamDisplay } from "@components";

const AboutTeam: FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <motion.div
      key={navItems[4]}
      {...fastExitAnimation}
      className="w-full flex flex-col lg:flex-row items-center gap-8 pb-[20%]"
    >
      <TeamSelect openIndex={openIndex} setOpenIndex={setOpenIndex} />
      <TeamDisplay team={team[openIndex]} />
    </motion.div>
  );
};

export default AboutTeam;

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation, navItems } from "@constants";
import {
  Divider,
  CornerBottomLeftIcon,
  CornerBottomRightIcon,
  CornerTopLeftIcon,
  CornerTopRightIcon,
} from "@components";

const team: string[] = ["Calder Moore", "Dusko", "Leon", "Whookasz"];

const AboutTeam: FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <motion.div
      key={navItems[4]}
      {...fastExitAnimation}
      className="w-full flex flex-col lg:flex-row items-center gap-8 pb-[20%]"
    >
      <div className="flex flex-row h-full lg:flex-col lg:w-auto">
        {team.map((name, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`relative font-teko-thin text-xl w-[200px] h-[50px] flex items-center pl-6 text-light-red transition-300 uppercase cursor-pointer
            bg-light-red bg-opacity-10  hover:text-opacity-100 text-opacity-80  border-light-red border-opacity-20 border-l border-r border-b ${
              index === 0 ? "border-t" : ""
            } ${
                isOpen
                  ? "text-gold border-gold border-opacity-80 bg-gold bg-opacity-[.25]"
                  : "text-light-red border-light-red hover:bg-opacity-20"
              }
            ${openIndex === index + 1 ? "gold-bottom-border" : " "}
            `}
              onClick={() => setOpenIndex(index)}
            >
              {name}
              {isOpen && (
                <>
                  <CornerBottomLeftIcon gold />
                  <CornerBottomRightIcon gold />
                  <CornerTopLeftIcon gold />
                  <CornerTopRightIcon gold />
                </>
              )}
            </div>
          );
        })}
        <div className="h-full w-full border-b border-l border-r bg-dark-red bg-opacity-50 border-light-red border-opacity-20 lg:min-h-[300px]"></div>
      </div>
      <div className="h-[500px] w-full flex flex-col justify-between">
        <Divider showRightTip={false} />
        <Divider showRightTip={false} />
      </div>
    </motion.div>
  );
};

export default AboutTeam;

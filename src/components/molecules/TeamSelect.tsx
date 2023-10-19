import { FC } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation, team } from "@constants";
import {
  CornerBottomLeftIcon,
  CornerBottomRightIcon,
  CornerTopLeftIcon,
  CornerTopRightIcon,
} from "@components";
import { Team } from "@types";

interface Props {
  openIndex: number;
  setOpenIndex: (index: number) => void;
}

const TeamSelect: FC<Props> = (props: Props) => {
  const { openIndex, setOpenIndex } = props;

  return (
    <div className="flex flex-row h-full lg:flex-col lg:w-auto">
      {team.map((item: Team, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`relative font-teko-thin text-xl w-[80px] sm:w-[140px] lg:w-[200px] h-[60px] sm:h-[50px] flex items-center justify-center lg:justify-start lg:pl-6 text-light-red transition-300 uppercase cursor-pointer
            bg-light-red bg-opacity-10  hover:text-opacity-100 text-opacity-80 border-color border lg:border-l lg:border-r lg:border-b leading-none text-center pt-1 ${
              index === 0 ? "border-t" : ""
            } ${
              isOpen
                ? "text-gold border-gold border-opacity-80 bg-gold bg-opacity-[.25]"
                : "text-light-red border-light-red hover:bg-opacity-20"
            }
            ${openIndex === index + 1 ? "lg:gold-bottom-border" : " "}
            `}
            onClick={() => setOpenIndex(index)}
          >
            {item.name}
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
      <div className="hidden lg:flex h-full w-[200px] lg:min-h-[325px] border-b border-l border-r bg-dark-red bg-opacity-50 border-color "></div>
    </div>
  );
};

export default TeamSelect;

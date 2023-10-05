import { FC, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimationProps {
  animateText: boolean;
  songName: string;
}
const TextSlidingAnimation: FC<AnimationProps> = (props: AnimationProps) => {
  const { animateText, songName } = props;

  return (
    <motion.div
      key={songName}
      initial={{ x: "0%" }}
      animate={{ x: animateText ? "-200%" : "0%" }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
        delay: 2,
      }}
      className="font-teko text-4xl text-[#2462A9] leading-none whitespace-nowrap"
    >
      {animateText
        ? songName + " • " + songName + " • " + songName + " • " + songName
        : songName}
    </motion.div>
  );
};
export default TextSlidingAnimation;

import { FC, useRef } from "react";

import { useOutsideAlerter } from "@hooks";
import {
  audioDropdownAnimation,
  navigationItemVariants,
  navigationVariants,
} from "@constants";
import { motion } from "framer-motion";

interface Props {
  close: () => void;
}
const AudioControlDropdown: FC<Props> = (props: Props) => {
  const { close } = props;

  const ref = useRef<HTMLDivElement>(null);
  useOutsideAlerter(ref, () => close());

  return (
    <motion.div
      key="acd"
      {...audioDropdownAnimation}
      // variants={navigationVariants}
      // initial="hidden"
      // animate="visible"
      ref={ref}
      className="absolute bg-audio border-b border-l border-r border-audio-border w-[210px] z-20"
    >
      <motion.div
        variants={navigationItemVariants}
        className="h-[120px] bg-audio-dark-bg"
      ></motion.div>
      <motion.div variants={navigationItemVariants} className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="198"
          height="41"
          viewBox="0 0 198 41"
          fill="none"
        >
          {/* center pause/ button */}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M98 12H94V28H98V12ZM105 12H101V28H105V12Z"
            fill="#B9FFFF"
          />
          {/* back button */}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 13H21V27H24V20L34 27V13L24 20V13Z"
            fill="#B9FFFF"
          />
          {/* next button */}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M174 13H177V27H174V20L164 27V13L174 20V13Z"
            fill="#B9FFFF"
          />
          {/* top border */}
          <rect width="198" height="1" fill="#B9FFFF" fill-opacity="0.12" />
          {/* left bprder */}
          <rect
            x="55"
            y="1"
            width="1"
            height="40"
            fill="#B9FFFF"
            fill-opacity="0.12"
          />
          {/* right border */}
          <rect
            x="142"
            y="1"
            width="1"
            height="40"
            fill="#B9FFFF"
            fill-opacity="0.12"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};
export default AudioControlDropdown;

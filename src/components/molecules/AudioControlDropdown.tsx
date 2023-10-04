import { Dispatch, FC, SetStateAction, useRef } from "react";
import {
  audioDropdownAnimation,
  enterAnimation,
  fastExitAnimation,
} from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface Props {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}
const AudioControlDropdown: FC<Props> = (props: Props) => {
  const { isPlaying, setIsPlaying } = props;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      key="acd"
      {...audioDropdownAnimation}
      ref={ref}
      className="absolute bg-audio border-b border-l border-r border-audio-border w-[210px] z-20"
    >
      {/* song display */}
      <motion.div
        {...enterAnimation}
        className="h-[120px] bg-audio-dark-bg centered-row"
      >
        <Image
          src="/images/audio-screen.svg"
          width={190}
          height={115}
          alt="Audio"
          className="pt-1.5"
        />
      </motion.div>
      {/* actions */}
      <div className="audio-controller ">
        {/* back button */}
        <button className="w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="21 13 10 14"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 13H21V27H24V20L34 27V13L24 20V13Z"
              fill="#B9FFFF"
            />
          </svg>
        </button>
        {/* pause/play */}
        <button className="w-1/2">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="16"
                viewBox="94 12 11 16"
                {...fastExitAnimation}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M98 12H94V28H98V12ZM105 12H101V28H105V12Z"
                  fill="#B9FFFF"
                />
              </motion.svg>
            ) : (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="20"
                viewBox="0 0 14 14"
                className="scale-125"
                {...fastExitAnimation}
              >
                <path d="M2 3v8l9-4-9-4z" fill="#B9FFFF" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
        {/* next button */}
        <button className="w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="164 13 13 14"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M174 13H177V27H174V20L164 27V13L174 20V13Z"
              fill="#B9FFFF"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};
export default AudioControlDropdown;

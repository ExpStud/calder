import { Dispatch, FC, SetStateAction } from "react";
import { fastExitAnimation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isPlaying: boolean;
  playSong: () => void;
  pauseSong: () => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
}
const AudioControlActions: FC<Props> = (props: Props) => {
  const { isPlaying, playSong, pauseSong, playNextSong, playPreviousSong } =
    props;

  return (
    <div className="audio-controller ">
      {/* previous button */}
      <button className="w-[29%]" onClick={() => playPreviousSong()}>
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

      <AnimatePresence mode="wait">
        {isPlaying ? (
          <button className="w-[42%]" onClick={() => pauseSong()}>
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
          </button>
        ) : (
          <button className="w-[42%]" onClick={() => playSong()}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="14"
              viewBox="0 0 8 10"
              fill="none"
              {...fastExitAnimation}
            >
              <path
                d="M7.42652 4.12584L0.594257 0.330143C0.327644 0.182025 0 0.374812 0 0.679806V9.32019C0 9.62519 0.327645 9.81798 0.594257 9.66986L7.42652 5.87416C8.11233 5.49315 8.11233 4.50685 7.42652 4.12584Z"
                fill="#B9FFFF"
              />
            </motion.svg>
          </button>
        )}
      </AnimatePresence>
      {/* next button */}
      <button className="w-[29%]" onClick={() => playNextSong()}>
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
  );
};
export default AudioControlActions;

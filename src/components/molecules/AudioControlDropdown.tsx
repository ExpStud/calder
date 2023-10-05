import { FC, useRef } from "react";
import { audioDropdownAnimation } from "@constants";
import { motion } from "framer-motion";
import { AudioControlActions, AudioControlDisplay } from "@components";
import { Song } from "@types";

interface Props {
  isPlaying: boolean;
  playSong: () => void;
  pauseSong: () => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
  currentSong: Song;
}

const AudioControlDropdown: FC<Props> = (props: Props) => {
  const {
    isPlaying,
    playSong,
    pauseSong,
    playNextSong,
    playPreviousSong,
    currentSong,
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      key="acd"
      {...audioDropdownAnimation}
      ref={ref}
      className="absolute bg-audio border-b border-l border-r border-audio-border w-[210px] z-20"
    >
      <AudioControlDisplay isPlaying={isPlaying} currentSong={currentSong} />
      <AudioControlActions
        isPlaying={isPlaying}
        playSong={playSong}
        pauseSong={pauseSong}
        playNextSong={playNextSong}
        playPreviousSong={playPreviousSong}
      />
    </motion.div>
  );
};
export default AudioControlDropdown;

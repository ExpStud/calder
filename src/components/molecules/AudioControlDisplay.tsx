import { FC, useEffect, useRef } from "react";
import { enterAnimation } from "@constants";
import { TextSlidingAnimation } from "@components";
import { motion } from "framer-motion";
import Image from "next/image";
import { Song } from "@types";

interface Props {
  isPlaying: boolean;
  currentSong: Song;
}
const AudioControlDisplay: FC<Props> = (props: Props) => {
  const { isPlaying, currentSong } = props;

  const animateText = isPlaying && currentSong.name.length > 15;
  const countRef = useRef<number>(0);

  useEffect(() => {
    if (currentSong) countRef.current += 1;
  }, [currentSong]);
  return (
    <motion.div
      {...enterAnimation}
      className="h-[120px] bg-audio-dark-bg centered-row relative overflow-hidden"
    >
      <div className="absolute top-4 left-5 flex flex-col uppercase overflow-hidden max-w-[165px]">
        <TextSlidingAnimation
          animateText={animateText}
          songName={currentSong.name}
        />
        <p className="font-teko-thin text-xl text-[#4A84BC] leading-none -mt-1.5">
          {currentSong.artist}
        </p>
      </div>
      <Image
        src="/images/audio-screen.svg"
        width={190}
        height={115}
        alt="Audio"
        className="pt-1.5"
      />
    </motion.div>
  );
};

export default AudioControlDisplay;

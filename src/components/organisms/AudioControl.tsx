import { FC, useEffect, useRef, useState } from "react";
import { AudioControlButton, AudioControlDropdown } from "@components";
import { AnimatePresence } from "framer-motion";
import { useOutsideAlerter } from "@hooks";
import { Song } from "@types";
import { songs } from "@constants";

const AudioControl: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);

  const ref = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useOutsideAlerter(ref, () => setOpen(false));

  const playSong = () => {
    if (!audioRef.current) return;
    audioRef.current.play();
  };

  const pauseSong = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
  };

  const playNextSong = () => {
    if (!audioRef.current) return;
    // pauseSong();
    setCurrentSong((prevState) => songs[(prevState.id + 1) % songs.length]);
    // playSong();
  };

  const playPreviousSong = () => {
    if (!audioRef.current) return;
    // pauseSong();
    setCurrentSong((prevState) =>
      prevState.id === 0 ? songs[songs.length - 1] : songs[prevState.id - 1]
    );
    // playSong();
  };

  const checkIsPlaying = () => {
    if (audioRef.current && !audioRef.current.paused) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  // determine if is music is playing
  useEffect(() => {
    if (!audioRef.current) return;
    checkIsPlaying();

    // add event listeners for play and pause events
    audioRef.current.addEventListener("play", checkIsPlaying);
    audioRef.current.addEventListener("pause", checkIsPlaying);
    audioRef.current.addEventListener("ended", playNextSong);

    return () => {
      if (!audioRef.current) return;
      audioRef.current.removeEventListener("play", checkIsPlaying);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audioRef.current.removeEventListener("pause", checkIsPlaying);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audioRef.current.removeEventListener("ended", playNextSong);
    };
  }, []);

  //
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `/songs/${currentSong.name}.mp3`;
      playSong();
    }
  }, [currentSong]);

  return (
    <div className="relative" ref={ref}>
      <AudioControlButton isPlaying={isPlaying} open={open} setOpen={setOpen} />
      <audio ref={audioRef} src={`/songs/${currentSong.name}.mp3`} />

      <AnimatePresence mode="wait">
        {open && (
          <AudioControlDropdown
            isPlaying={isPlaying}
            playSong={playSong}
            pauseSong={pauseSong}
            playNextSong={playNextSong}
            playPreviousSong={playPreviousSong}
            currentSong={currentSong}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default AudioControl;

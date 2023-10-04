import { FC, useRef, useState } from "react";
import { AudioControlButton, AudioControlDropdown } from "@components";
import { AnimatePresence } from "framer-motion";
import { useOutsideAlerter } from "@hooks";

const AudioControl: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  useOutsideAlerter(ref, () => setOpen(false));

  return (
    <div className="relative" ref={ref}>
      <AudioControlButton isPlaying={isPlaying} open={open} setOpen={setOpen} />
      <AnimatePresence mode="wait">
        {open && (
          <AudioControlDropdown
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default AudioControl;

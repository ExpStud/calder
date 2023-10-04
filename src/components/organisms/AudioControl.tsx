import { FC, useState } from "react";
import { AudioControlButton, AudioControlDropdown } from "@components";
import { AnimatePresence } from "framer-motion";

const AudioControl: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="relative">
      <AudioControlButton isActive={isActive} open={open} setOpen={setOpen} />
      <AnimatePresence mode="wait">
        {open && <AudioControlDropdown close={() => setOpen(!open)} />}
      </AnimatePresence>
    </div>
  );
};
export default AudioControl;

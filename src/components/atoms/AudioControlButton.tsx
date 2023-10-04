import { Dispatch, FC, HTMLAttributes, SetStateAction } from "react";
import { ArrowIcon, AudioControlIcon } from "@components";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  isPlaying: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AudioControlButton: FC<Props> = (props: Props) => {
  const { isPlaying, open, setOpen } = props;
  return (
    <button
      className="audio-button !justify-between z-10"
      onClick={() => setOpen(!open)}
    >
      <div className="flex h-full items-center">
        <div
          className={` ${
            isPlaying ? "audio-icon-active" : "audio-icon-inactive"
          }`}
        >
          <AudioControlIcon isPlaying={isPlaying} />
        </div>
        <p className="font-teko pt-1">Audio Control</p>
      </div>
      <div className="px-4">
        <ArrowIcon className="scale-125" animate={open} />
      </div>
    </button>
  );
};
export default AudioControlButton;

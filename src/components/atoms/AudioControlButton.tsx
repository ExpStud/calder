import { Dispatch, FC, HTMLAttributes, SetStateAction } from "react";
import { ArrowIcon, AudioControlIcon } from "@components";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AudioControlButton: FC<Props> = (props: Props) => {
  const { isActive, open, setOpen } = props;
  console.log("open ", open);
  const handleClick = () => {
    if (!open) setOpen(true);
  };

  return (
    <button
      className="audio-button !justify-between z-10"
      onClick={() => handleClick()}
    >
      <div className="flex h-full items-center">
        <div
          className={` ${
            isActive ? "audio-icon-active" : "audio-icon-inactive"
          }`}
        >
          <AudioControlIcon isActive={isActive} />
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

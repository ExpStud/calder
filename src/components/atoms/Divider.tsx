import { HTMLAttributes, FC } from "react";
import Image from "next/image";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  showLeftTip?: boolean; //default true
  showRightTip?: boolean; //default true
  showLeftTipHighlight?: boolean; //default false
  leftTipWidth?: string;
  opacity?: string;
}
const Divider: FC<DividerProps> = (props: DividerProps) => {
  const {
    showLeftTip = true,
    showRightTip = true,
    showLeftTipHighlight = false,
    leftTipWidth = "w-[48px]",
    opacity = "opacity-30",
    className,
  } = props;
  return (
    <div className={`relative -z-20 h-[1px] w-full flex gap-0 ${className} `}>
      {showLeftTip && (
        <div className={`bg-light-red opacity-60 ${leftTipWidth}`} />
      )}
      {showLeftTipHighlight && (
        <Image
          src="/images/divider-highlight.svg"
          width={80}
          height={4}
          alt="Highlight"
          className="absolute -left-2.5 -top-2.5"
        />
      )}
      <div className={`w-full bg-light-red transition-300 ${opacity}`}></div>
      {showRightTip && <div className={`bg-light-red opacity-60 w-[24px] `} />}
    </div>
  );
};

export default Divider;

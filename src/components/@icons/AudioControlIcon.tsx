import React, { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  isPlaying: boolean;
}
const ConnectWalletIcon: FC<Props> = (props: Props) => {
  const { className, isPlaying = false } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0H0V1H4V0ZM0 2H4V3H0V2ZM4 4H0V5H4V4ZM0 6H4V7H0V6ZM4 8H0V9H4V8ZM0 10H4V11H0V10ZM4 12H0V13H4V12ZM4 14H0V15H4V14ZM10 14H6V15H10V14ZM12 14H16V15H12V14ZM6 12H10V13H6V12ZM16 12H12V13H16V12ZM10 10H6V11H10V10ZM12 10H16V11H12V10ZM6 8H10V9H6V8ZM16 8H12V9H16V8ZM10 6H6V7H10V6ZM12 6H16V7H12V6ZM6 4H10V5H6V4ZM16 4H12V5H16V4ZM10 2H6V3H10V2ZM12 2H16V3H12V2ZM6 0H10V1H6V0ZM16 0H12V1H16V0Z"
        fill="#B9FFFF"
        fillOpacity="0.3"
      />
      <rect y="14" width="4" height="1" fill="#B9FFFF" />
      <rect x="6" y="14" width="4" height="1" fill="#B9FFFF" />
      <rect x="12" y="14" width="4" height="1" fill="#B9FFFF" />
      {isPlaying && <rect y="12" width="4" height="1" fill="#B9FFFF" />}
      {isPlaying && <rect x="6" y="12" width="4" height="1" fill="#B9FFFF" />}
      {isPlaying && <rect x="12" y="12" width="4" height="1" fill="#B9FFFF" />}
      {isPlaying && <rect y="10" width="4" height="1" fill="#B9FFFF" />}
      {isPlaying && <rect x="6" y="10" width="4" height="1" fill="#B9FFFF" />}
      {isPlaying && <rect x="6" y="8" width="4" height="1" fill="#B9FFFF" />}
      {isPlaying && <rect x="6" y="6" width="4" height="1" fill="#B9FFFF" />}
      {isPlaying && <rect x="6" y="4" width="4" height="1" fill="#B9FFFF" />}
    </svg>
  );
};

export default ConnectWalletIcon;

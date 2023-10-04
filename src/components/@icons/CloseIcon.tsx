import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
}

const CloseIcon: FC<Props> = (props: Props) => {
  const { size = 50, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      className="transition-all duration-200 fill-light-red opacity-60 hover:opacity-100"
    >
      <rect
        x="1.41418"
        y="0.485291"
        width="24"
        height="2"
        transform="rotate(45 1.41418 0.485291)"
        fill="#EB6976"
      />
      <rect
        x="0.097229"
        y="16.9706"
        width="24"
        height="2"
        transform="rotate(-45 0.097229 16.9706)"
        fill="#EB6976"
      />
    </svg>
  );
};

export default CloseIcon;

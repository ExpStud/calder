import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const CornerBottomLeftIcon: FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-3.49691e-07 0L-8.74228e-08 6L0 8L2 8L8 8L8 6L2 6L2 -8.74228e-08L-3.49691e-07 0Z"
        fill="#C25661"
      />
    </svg>
  );
};

export default CornerBottomLeftIcon;

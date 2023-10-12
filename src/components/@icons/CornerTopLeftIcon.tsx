import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const CornerTopLeftIcon: FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 0H2H0V2V8H2L2 2H8V0Z"
        fill="#C25661"
      />
    </svg>
  );
};

export default CornerTopLeftIcon;

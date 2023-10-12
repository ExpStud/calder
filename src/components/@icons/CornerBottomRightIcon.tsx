import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const CornerBottomRightIcon: FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-0"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 8L6 8L8 8L8 6L8 0L6 -1.74846e-07L6 6L1.74846e-07 6L0 8Z"
        fill="#C25661"
      />
    </svg>
  );
};

export default CornerBottomRightIcon;

import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  showHighlight?: boolean;
}

const CornerTopRightIcon: FC<Props> = (props: Props) => {
  const { showHighlight = false, ...componentProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="9"
      viewBox="0 0 15 9"
      fill="none"
      className={`${showHighlight ? "gold-filter" : ""}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.31237 0.845771L1.81237 8.34577L0 7.5L3.5 0L5.31237 0.845771ZM9.81237 0.845771L6.31237 8.34577L4.5 7.5L8 0L9.81237 0.845771ZM11.3124 8.34577L14.8124 0.845771L13 0L9.5 7.5L11.3124 8.34577Z"
        fill={componentProps.fill || "#FFFFFF"}
        fillOpacity={componentProps.fillOpacity || 1}
        className="transition-all duration-300 "
      />
    </svg>
  );
};

export default CornerTopRightIcon;

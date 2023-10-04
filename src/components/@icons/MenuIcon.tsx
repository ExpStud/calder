import { FC, SVGProps, useState } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const MenuIcon: FC<Props> = (props: Props) => {
  const { className, ...componentProps } = props;

  return (
    <svg
      width="24"
      height="10"
      viewBox="0 0 24 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...componentProps}
      className="transition-all duration-200 fill-light-red opacity-60 hover:opacity-100"
    >
      <rect width="24" height="2" />
      <rect y="8" width="24" height="2" />
    </svg>
  );
};

export default MenuIcon;

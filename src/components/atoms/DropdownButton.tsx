import { ArrowIcon } from "@components";
import { arrowVariants, smallClickAnimation } from "@constants";
import { ButtonHTMLAttributes, FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  open: boolean;
  label: string;
}

const DropdownButton: FC<Props> = (props: Props) => {
  const { open, label, ...componentProps } = props;

  return (
    <button
      className={`transition-300 relative flex md:whitespace-nowrap items-center !justify-between !text-sm md:!text-base !w-[140px] md:!w-[200px] h-[38px] px-3 button-transitions button-template connect-button !bg-red-020 ${
        open ? "" : ""
      }
      ${
        componentProps.disabled
          ? "cursor-not-allowed opacity-20"
          : "hover:bg-dark cursor-pointer "
      }`}
      disabled={componentProps.disabled}
    >
      <p className="pb-0.5">{label}</p>
      <ArrowIcon className="scale-125 mt-" animate={open} fill={"#EB6976"} />
    </button>
  );
};

export default DropdownButton;

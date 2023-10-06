import { FC } from "react";
import { Navigation } from "@types";

interface Props {
  navigation: Navigation;
  showSymbol?: boolean;
}
const NavigationContent: FC<Props> = (props: Props) => {
  const { navigation, showSymbol = false } = props;
  return (
    <div className="flex items-center gap-0 md:gap-4 xl:gap-6 h-full ">
      <p
        className={`${
          showSymbol
            ? "navigation-symbol "
            : "w-[10px] xs:w-[80px] md:w-[88px] "
        }`}
      >
        {showSymbol && navigation.symbol}
      </p>
      <p className="uppercase text-light-red font-teko-thin pt-1 text-xl md:text-2xl tracking-wider w-[75px] md:w-[90px]">
        <span className="opacity-60">0{navigation.id + 1}</span>{" "}
        {navigation.name}
      </p>
      <p className="uppercase font-teko-thin pt-1 text-xl md:text-2xl tracking-wider pl-4">
        {navigation.label}
      </p>
    </div>
  );
};
export default NavigationContent;

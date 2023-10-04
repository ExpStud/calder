import { FC } from "react";
import { Navigation } from "@types";

interface Props {
  navigation: Navigation;
  showSymbol?: boolean;
}
const NavigationContent: FC<Props> = (props: Props) => {
  const { navigation, showSymbol = false } = props;
  return (
    <div className="flex items-center gap-6 h-full ">
      <p className={`w-[75px] ${showSymbol ? "navigation-symbol" : ""}`}>
        {showSymbol && navigation.symbol}
      </p>
      <p className="uppercase text-light-red font-teko-thin pt-1 text-2xl tracking-wider w-[90px]">
        <span className="opacity-60">0{navigation.id + 1}</span>{" "}
        {navigation.name}
      </p>
      <p className="uppercase font-teko-thin pt-1 text-2xl tracking-wider pl-4">
        {navigation.label}
      </p>
    </div>
  );
};
export default NavigationContent;

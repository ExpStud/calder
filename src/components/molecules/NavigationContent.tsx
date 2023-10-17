import { FC } from "react";
import { Navigation } from "@types";
import { useRouter } from "next/router";

interface Props {
  navigation: Navigation;
  showSymbol?: boolean;
}
const NavigationContent: FC<Props> = (props: Props) => {
  const { navigation, showSymbol = false } = props;
  const router = useRouter();

  const handleIconClick = () => {
    if (showSymbol) {
      router.push("/");
    }
  };
  return (
    <div
      className={`flex items-center gap-0 2xs:gap-2 sm:gap-3 xl:gap-6 h-full ${
        navigation.disabled ? "opacity-30" : ""
      }`}
    >
      <div
        className={`${
          showSymbol
            ? "navigation-symbol "
            : "w-[10px] 2xs:w-[80px] md:w-[88px] "
        }`}
        onClick={() => handleIconClick()}
      >
        {showSymbol && navigation.symbol}
      </div>
      <p className="uppercase text-light-red font-teko-thin pt-1 text-xl md:text-2xl tracking-wider w-[60px] xs:w-[75px] md:w-[90px] text-ellipsis whitespace-nowrap overflow-hidden">
        <span className="opacity-60">0{navigation.id + 1}</span>{" "}
        {navigation.name}
      </p>
      <p className="uppercase font-teko-thin pt-1 text-xl md:text-2xl tracking-wider xs:pl-4 text-ellipsis whitespace-nowrap overflow-hidden max-w-[100px] 2xs:max-w-[190px] xs:max-w-[300px]">
        {navigation.label}
      </p>
    </div>
  );
};
export default NavigationContent;

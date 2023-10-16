import { FC } from "react";
import { ConnectWalletButton, Navigation, AudioControl } from "@components";

const HeaderContent: FC = () => {
  return (
    <div className="w-[98vw] flex items-start justify-between gap-6 lg:px-6 lg:py-4 z-10 ">
      <AudioControl className="!hidden lg:!block" />
      <Navigation />
      <ConnectWalletButton className="!hidden lg:!flex" />
    </div>
  );
};
export default HeaderContent;

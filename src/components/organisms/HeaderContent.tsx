import { FC } from "react";
import { ConnectWallet, Navigation } from "@components";

const HeaderContent: FC = () => {
  return (
    <div className="w-screen flex items-start justify-between gap-6 px-4 md:px-6 py-4 z-20">
      <ConnectWallet />
      <Navigation />
      <ConnectWallet />
    </div>
  );
};
export default HeaderContent;

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { FC } from "react";
import { ConnectWalletIcon } from "@components";

const ConnectWallet: FC = () => {
  const { publicKey, connected, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleClick = () => {
    if (connected) disconnect();
    else setVisible(true);
  };

  return (
    <button className="custom-button" onClick={() => handleClick()}>
      <div className="flex items-center justify-center border-r-[1px] h-full px-3 border-light-red border-opacity-[.2] mr-2">
        <ConnectWalletIcon />
      </div>
      <p>
        {publicKey
          ? publicKey.toBase58().slice(0, 4) +
            ".." +
            publicKey.toBase58().slice(-4)
          : "Connect Wallet"}
      </p>
    </button>
  );
};
export default ConnectWallet;

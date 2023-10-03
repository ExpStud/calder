import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { FC } from "react";
import { ConnectWalletIcon } from "@components";
import Image from "next/image";

const ConnectWallet: FC = () => {
  const { publicKey, connected, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleClick = () => {
    if (connected) disconnect();
    else setVisible(true);
  };

  return (
    <button className="custom-button" onClick={() => handleClick()}>
      <div className="connect-icon">
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

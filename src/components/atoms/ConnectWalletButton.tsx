import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { FC, HTMLAttributes } from "react";
import { ConnectWalletIcon } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";

interface Props extends HTMLAttributes<HTMLButtonElement> {}
const ConnectWalletButton: FC<Props> = (props: Props) => {
  const { className, ...componentProps } = props;
  const { publicKey, connected, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleClick = () => {
    if (connected) disconnect();
    else setVisible(true);
  };

  return (
    <button
      className={`connect-button ${className}`}
      {...componentProps}
      onClick={() => handleClick()}
    >
      <div className="connect-icon">
        <ConnectWalletIcon />
      </div>
      {publicKey ? (
        <p>
          {publicKey.toBase58().slice(0, 4) +
            ".." +
            publicKey.toBase58().slice(-4)}
        </p>
      ) : (
        <p>Connect Wallet</p>
      )}
    </button>
  );
};
export default ConnectWalletButton;

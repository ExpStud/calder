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
      <AnimatePresence mode="wait">
        {publicKey ? (
          <motion.p key="wallet" {...fastExitAnimation}>
            {publicKey.toBase58().slice(0, 4) +
              ".." +
              publicKey.toBase58().slice(-4)}
          </motion.p>
        ) : (
          <motion.p key="connect" {...fastExitAnimation}>
            Connect Wallet
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
};
export default ConnectWalletButton;

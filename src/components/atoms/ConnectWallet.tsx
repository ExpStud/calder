import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { FC } from "react";
import { ConnectWalletIcon } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";

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
export default ConnectWallet;

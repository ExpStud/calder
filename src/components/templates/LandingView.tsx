import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext, slideDown } from "@constants";
import { IconBar } from "@components";
import { handleAssetLoad } from "@utils";
import Image from "next/image";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="page-centered">
      <motion.div {...slideDown(showView)}>
        {/* <Image
          src="/images/logo.png"
          alt="EXP"
          width={400}
          height={400}
          className="px-2 lg:px-20 2xl:px-0"
          onLoadingComplete={() => handleAssetLoad(0, setAssets)}
        /> */}
      </motion.div>
    </div>
  );
};

export default LandingView;

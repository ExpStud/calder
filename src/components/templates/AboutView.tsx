import { motion } from "framer-motion";
import { FC, useContext } from "react";
import { slideUp } from "@constants";
import Image from "next/image";
import Divider from "../atoms/Divider";

interface Props {}

const AboutView: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div className="centered-page">
      <Divider
        showLeftTipHighlight
        showLeftTip={false}
        className="mt-14 mb-3"
      />
      <div className="flex flex-col lg:flex-row justify-between items-center w-full pt-4 gap-3">
        <h2>About</h2>
        <div className="flex items-center gap-2">
          <div className="">Overview</div>
          <div className="">Substance</div>
          <div className="">Searchers</div>
          <div className="">Roadmap</div>
          <div className="">Team</div>
        </div>
      </div>
      <div className="flex gap-4 w-full mt-14 mb-3">
        <Divider showRightTip={false} />
        <Divider showLeftTip={false} showRightTip={false} />
      </div>
    </div>
  );
};

export default AboutView;

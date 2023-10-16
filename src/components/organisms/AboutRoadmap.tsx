import { FC } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation, navItems } from "@constants";
import Image from "next/image";
import { Divider } from "@components";

const AboutSubstance: FC = () => {
  return (
    <motion.div key={navItems[3]} {...fastExitAnimation} className="w-full">
      <Divider showRightTip={false} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="col-start pt-8">
          <p className="text-light-red uppercase font-teko md:pb-3 text-lg">
            Search of Universe
          </p>
          <h3 className="">
            The Path <br /> of Substance
          </h3>
          <Divider
            leftTipWidth="w-2"
            showRightTip={false}
            className="w-20 my-7"
          />

          <div className="flex flex-col items-center gap-6 text-sm lg:w-[320px] pt-1 mr-14">
            <p>
              With Substance, the goal is to build and release a much bigger
              story and world within the In Search Of universe with digital and
              physical form. Some of my biggest goals have been to create a
              short film and a comic book. What better way to do that than to
              merge them together and create a brand new experience!
            </p>
            <p>
              The collab drops/airdrops will happen a little bit after the page
              releases, not on their own week. just the right amount of time for
              people to collect to be able to get airdrop.
            </p>
            <p>
              And then yeah have to filter in some of the tier rewards in the
              timeline, which will happen sometime down the line, releasing the
              OST, gather mythic lads for 3D print, etc. as well as start
              building the comic book pyshical itself, so the holders can see
              how the project will transfer to that medium.
            </p>
          </div>
        </div>
        <Image
          src="/images/about/roadmap.svg"
          width={800}
          height={800}
          alt="Roadmap"
          className="scale-"
        />
      </div>
    </motion.div>
  );
};

export default AboutSubstance;

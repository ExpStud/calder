import { FC, useEffect, useState } from "react";
import { AboutNavigation } from "@components";
import Divider from "../atoms/Divider";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation } from "@constants";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const navItems: string[] = [
  "Overview",
  "Substance",
  "Searchers",
  "Roadmap",
  "Team",
];

const AboutView: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const queryParams = useSearchParams();

  //set selected item based on query params
  useEffect(() => {
    const id = queryParams.get("id");
    if (id) {
      navItems.map((item, index) => {
        if (item.toLowerCase() === id) {
          setSelectedItem(navItems[index]);
        }
      });
    } else {
      setSelectedItem(navItems[0]);
    }
  }, [queryParams]);

  return (
    <div className="page-centered">
      <Divider
        showLeftTipHighlight
        showLeftTip={false}
        className="mt-14 mb-3"
      />
      <div className="flex flex-col lg:flex-row justify-between items-center w-full pt-4 pb-14 gap-3">
        <h2>About</h2>
        <AboutNavigation
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          navItems={navItems}
        />
      </div>

      <AnimatePresence mode="wait">
        {/* Overview */}
        {selectedItem === navItems[0] && (
          <motion.div key={navItems[0]} {...fastExitAnimation}>
            {navItems[0]}
          </motion.div>
        )}
        {/* Substance */}
        {selectedItem === navItems[1] && (
          <motion.div
            key={navItems[1]}
            className="flex flex-col lg:flex-row gap-6 w-full mb-3"
            {...fastExitAnimation}
          >
            <div className="col-start lg:w-1/2">
              <Divider showRightTip={false} />
              <div className="flex flex-col gap-6 text-sm lg:pr-[30%] py-10">
                <p>
                  The main goal for Substance will be to create a physical
                  version of the comic book, complete with AR integration so the
                  viewer can enjoy the story with the animations and soundtrack.
                </p>
                <p>
                  This project is something I have been playing with the idea of
                  for over 4 years now. Up until now it just didn&apos;t seem
                  feasible as I had my full time job and a lot of commissions
                  lined up to be able to focus on a project of this magnitude.
                </p>
                <p>
                  With Substance, the goal is to build and release a much bigger
                  story and world within the In Search Of universe with digital
                  and physical form. Some of my biggest goals have been to
                  create a short film and a comic book. What better way to do
                  that than to merge them together and create a brand new
                  experience!
                </p>
                <p>
                  To help heighten the experience I have teamed up with a sound
                  engineer, Dusko! He will be using his talents to bring the
                  story to life with immersive sound effects, ambient vibes, and
                  a great soundtrack to help set the mood for each piece.
                </p>
                <p>
                  This project will be filled with fun rewards, airdrops,
                  collaborations with artists of a variety mediums including
                  audio and visuals, cool physicals such as the book and 3d
                  prints of the project, and more! I hope you all can join Lorne
                  on his adventure as he delves into the deep to find his lost
                  brother, and collect some cool stuff along the way!
                </p>
              </div>
            </div>
            <div className="col-start lg:w-1/2">
              <Divider showLeftTip={false} showRightTip={false} />
            </div>
          </motion.div>
        )}
        {/* Searchers */}
        {selectedItem === navItems[2] && (
          <motion.div key={navItems[2]} {...fastExitAnimation}>
            {navItems[2]}
          </motion.div>
        )}
        {/* Roadmap */}
        {selectedItem === navItems[3] && (
          <motion.div
            key={navItems[3]}
            {...fastExitAnimation}
            className="w-full"
          >
            <Divider showRightTip={false} />
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between">
              <div className="col-start pt-8">
                <p className="text-light-red uppercase font-teko md:pb-3 text-lg">
                  Search of Universe
                </p>
                <h3 className="">
                  The Path <br className="hidden lg:block" /> of Substance
                </h3>
                <Divider
                  leftTipWidth="w-2"
                  showRightTip={false}
                  className="w-20 my-7"
                />

                <div className="flex flex-col items-center gap-6 text-sm lg:w-[320px] pt-1 mr-14">
                  <p>
                    With Substance, the goal is to build and release a much
                    bigger story and world within the In Search Of universe with
                    digital and physical form. Some of my biggest goals have
                    been to create a short film and a comic book. What better
                    way to do that than to merge them together and create a
                    brand new experience!
                  </p>
                  <p>
                    The collab drops/airdrops will happen a little bit after the
                    page releases, not on their own week. just the right amount
                    of time for people to collect to be able to get airdrop.
                  </p>
                  <p>
                    And then yeah have to filter in some of the tier rewards in
                    the timeline, which will happen sometime down the line,
                    releasing the OST, gather mythic lads for 3D print, etc. as
                    well as start building the comic book pyshical itself, so
                    the holders can see how the project will transfer to that
                    medium.
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
        )}
        {/* Team */}
        {selectedItem === navItems[4] && (
          <motion.div key={navItems[4]} {...fastExitAnimation}>
            {navItems[4]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutView;

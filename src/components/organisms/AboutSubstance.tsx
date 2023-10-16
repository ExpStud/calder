import { FC } from "react";
import { Accordion } from "@components";
import Divider from "../atoms/Divider";
import { motion } from "framer-motion";
import { exitAnimation, navItems, substanceItems } from "@constants";

const AboutSubstance: FC = () => {
  return (
    <motion.div
      key={navItems[1]}
      className="flex flex-col lg:flex-row gap-6 w-full mb-3"
      {...exitAnimation}
    >
      <div className="col-start lg:w-1/2">
        <Divider showRightTip={false} />
        <div className="flex flex-col gap-6 text-sm lg:pr-[30%] py-10">
          <p>
            The main goal for Substance will be to create a physical version of
            the comic book, complete with AR integration so the viewer can enjoy
            the story with the animations and soundtrack.
          </p>
          <p>
            This project is something I have been playing with the idea of for
            over 4 years now. Up until now it just didn&apos;t seem feasible as
            I had my full time job and a lot of commissions lined up to be able
            to focus on a project of this magnitude.
          </p>
          <p>
            With Substance, the goal is to build and release a much bigger story
            and world within the In Search Of universe with digital and physical
            form. Some of my biggest goals have been to create a short film and
            a comic book. What better way to do that than to merge them together
            and create a brand new experience!
          </p>
          <p>
            To help heighten the experience I have teamed up with a sound
            engineer, Dusko! He will be using his talents to bring the story to
            life with immersive sound effects, ambient vibes, and a great
            soundtrack to help set the mood for each piece.
          </p>
          <p>
            This project will be filled with fun rewards, airdrops,
            collaborations with artists of a variety mediums including audio and
            visuals, cool physicals such as the book and 3d prints of the
            project, and more! I hope you all can join Lorne on his adventure as
            he delves into the deep to find his lost brother, and collect some
            cool stuff along the way!
          </p>
        </div>
      </div>
      <div className="col-start lg:w-1/2">
        <Divider showLeftTip={false} showRightTip={false} />
        <Accordion items={substanceItems} />
      </div>
    </motion.div>
  );
};

export default AboutSubstance;

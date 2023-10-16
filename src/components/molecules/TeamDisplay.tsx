import { FC } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation, team } from "@constants";
import { Divider, TwitterIcon } from "@components";
import { Team } from "@types";
import Image from "next/image";

interface Props {
  team: Team;
}

const TeamDisplay: FC<Props> = (props: Props) => {
  const { team } = props;

  return (
    <div className="lg:h-[525px] w-full flex flex-col justify-between ">
      <Divider showRightTip={false} />
      <div className="flex flex-col lg:flex-row h-full w-full">
        {/* col 1*/}
        <div className="self-end">
          <Image src={team.image} alt={team.name} height={800} width={800} />
        </div>
        {/* col 2*/}
        <div className="col-start w-full pt-6 xl:pt-10">
          {/* header row */}
          <div className="flex w-full items-center justify-between">
            <h3>{team.name}</h3>
            <TwitterIcon
              url={team.twitter}
              className="w-14 row-centered bg-light-red bg-opacity-10 border border-light-red border-opacity-20 hover:bg-opacity-20 transition-300"
            />
          </div>
          {/* text */}
          <p className="text-light-red uppercase font-teko pb-3 lg:pb-0 text-lg">
            {team.title}
          </p>
          <Divider showLeftTip={false} className="w-16 my-4 lg:my-0 xl:my-4 " />
          <div className="col-start gap-4 pb-10">
            {team.bio.map((item: string, index: number) => (
              <p key={index} className="text-sm">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Divider showRightTip={false} />
    </div>
  );
};

export default TeamDisplay;

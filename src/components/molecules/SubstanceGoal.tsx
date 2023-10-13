import { FC } from "react";
import { AccordionWrapper } from "@components";
import Image from "next/image";

interface Props {
  animate: boolean;
}
const SubstanceGoal: FC<Props> = (props: Props) => {
  const { animate } = props;

  return (
    <AccordionWrapper animate={animate}>
      <div className="flex items-center gap-6 justify-center">
        <div className="w-[40%] md:pt-4">
          <Image
            src="/images/about/substance-goal.png"
            width={300}
            height={300}
            alt="Substance Goal"
          />
        </div>
        <div className="pr-6 md:pb-8 w-[60%] max-w-[320px]">
          <h4>the goal</h4>
          <p className="text-sm ">
            The main goal for Substance will be to create a physical version of
            the comic book, complete with AR integration so the viewer can enjoy
            the story with the animations and soundtrack.
          </p>
        </div>
      </div>
    </AccordionWrapper>
  );
};

export default SubstanceGoal;

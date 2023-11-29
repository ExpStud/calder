import { FC } from "react";
import { AccordionWrapper } from "@components";
import Image from "next/image";

interface Props {
  animate: boolean;
  image: string;
  title: string;
  description: string;
}
const SubstanceGoal: FC<Props> = (props: Props) => {
  const { animate, image, title, description } = props;
  console.log("image ", image);
  return (
    <AccordionWrapper animate={animate}>
      <div className="flex items-center gap-6 justify-center">
        <div className="w-[40%] md:pt-4">
          <Image
            src={`/images/about/substance/${image}`}
            width={300}
            height={300}
            alt={title}
          />
        </div>
        <div className="pr-6 md:pb-8 w-[60%] max-w-[320px]">
          <h4>{title}</h4>
          <p className="text-sm ">{description}</p>
        </div>
      </div>
    </AccordionWrapper>
  );
};

export default SubstanceGoal;

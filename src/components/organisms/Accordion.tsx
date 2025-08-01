import { FC, HTMLAttributes, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StackIcon, SubstanceGoal } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  titles: string[];
  descriptions: string[];
}

const Accordion: FC<Props> = (props: Props) => {
  const { titles, className, descriptions } = props;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div
      className={`relative w-full flex flex-col justify-center ${className}`}
    >
      {titles.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col cursor-pointer transition-300 border-b border-color hover:border-opacity-60`}
          onClick={() => toggleAccordion(index)}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div
            className={`flex items-center justify-between h-14 transition-300 font-teko-thin text-2xl opacity-70 hover:opacity-100 ${
              openIndex === index ? "text-gold" : "text-light-red"
            }`}
          >
            <div className="flex gap-4">
              <p className="opacity-60">0{index + 1}</p>
              <p>{item}</p>
            </div>
            <StackIcon
              fillOpacity={
                openIndex === index ? 1 : hoverIndex === index ? 0.6 : 0.3
              }
              fill={openIndex === index ? "#FEFDBA" : "#EB6976"}
              showHighlight={openIndex === index}
            />
          </div>
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: openIndex === index ? "auto" : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: openIndex === index ? 0.2 : 0.4,
            }}
          >
            <AnimatePresence mode="wait">
              {index === 0 && openIndex === 0 && (
                <SubstanceGoal
                  animate={openIndex === 0}
                  key={0}
                  title={titles[index]}
                  description={descriptions[index]}
                  image={
                    titles[index].replaceAll(" ", "-").toLocaleLowerCase() +
                    ".png"
                  }
                />
              )}
              {index === 1 && openIndex === 1 && (
                <SubstanceGoal
                  animate={openIndex === 1}
                  key={1}
                  title={titles[index]}
                  description={descriptions[index]}
                  image={
                    titles[index].replaceAll(" ", "-").toLocaleLowerCase() +
                    ".png"
                  }
                />
              )}
              {index === 2 && openIndex === 2 && (
                <SubstanceGoal
                  animate={openIndex === 2}
                  key={2}
                  title={titles[index]}
                  description={descriptions[index]}
                  image={
                    titles[index].replaceAll(" ", "-").toLocaleLowerCase() +
                    ".png"
                  }
                />
              )}
              {index === 3 && openIndex === 3 && (
                <SubstanceGoal
                  animate={openIndex === 3}
                  key={3}
                  title={titles[index]}
                  description={descriptions[index]}
                  image={
                    titles[index].replaceAll(" ", "-").toLocaleLowerCase() +
                    ".png"
                  }
                />
              )}
              {index === 4 && openIndex === 4 && (
                <SubstanceGoal
                  animate={openIndex === 4}
                  key={4}
                  title={titles[index]}
                  description={descriptions[index]}
                  image={
                    titles[index].replaceAll(" ", "-").toLocaleLowerCase() +
                    ".png"
                  }
                />
              )}
              {index === 5 && openIndex === 5 && (
                <SubstanceGoal
                  animate={openIndex === 5}
                  key={5}
                  title={titles[index]}
                  description={descriptions[index]}
                  image={
                    titles[index].replaceAll(" ", "-").toLocaleLowerCase() +
                    ".png"
                  }
                />
              )}
              {index === 6 && openIndex === 6 && (
                <SubstanceGoal
                  animate={openIndex === 6}
                  key={6}
                  title={titles[index]}
                  description={descriptions[index]}
                  image={titles[index].replaceAll(" ", "-").toLocaleLowerCase()}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;

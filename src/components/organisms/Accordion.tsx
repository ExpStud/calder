import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StackIcon } from "@components";

interface Props {
  items: string[];
}

const Accordion: FC<Props> = (props: Props) => {
  const { items } = props;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null); //TODO: implement hover state [1/2
  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="relative w-full flex flex-col justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col cursor-pointer"
          onClick={() => toggleAccordion(index)}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div
            className={`flex items-center justify-between h-14 transition-all duration-300 font-teko-thin text-2xl opacity-70 hover:opacity-100 ${
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
            animate={{ height: openIndex === index ? 200 : 0 }} //TODO: change 200 to "auto"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=""
          ></motion.div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;

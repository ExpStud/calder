import { FC, SVGProps } from "react";
import { motion } from "framer-motion";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  animate?: boolean;
  animateColor?: string;
  type?: string;
}

const ArrowIcon: FC<Props> = (props: Props) => {
  const {
    color = "#6F7273",
    animateColor = "#E77975",
    animate = false,
    type = "carrot",
    className,
    ...componentProps
  } = props;

  const arrowVariants = {
    start: {
      rotate: 0,
      // stroke: color,
      transition: {
        duration: 0.31,
      },
    },
    end: {
      // stroke: animateColor,
      rotate: -180,
      transition: {
        duration: 0.31,
      },
    },
  };
  return (
    // <motion.svg
    //   width="35"
    //   height="35"
    //   viewBox="0 0 89 89"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <motion.path
    //     d="M22.25 33.375L44.5 55.625L66.75 33.375"
    //     stroke={color}
    //     strokeWidth="4"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     animate={animate ? "end" : "start"}
    //     variants={arrowVariants}
    //   />
    // </motion.svg>
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...componentProps}
      className={`${className}`}
    >
      <motion.path
        d="M4.63477 5.20898C4.44271 5.20898 4.26693 5.13086 4.10742 4.97461L0.430664 1.21484C0.368815 1.14974 0.321615 1.07975 0.289062 1.00488C0.259766 0.930013 0.245117 0.847005 0.245117 0.755859C0.245117 0.635417 0.274414 0.52474 0.333008 0.423828C0.391602 0.322917 0.469727 0.243164 0.567383 0.18457C0.668294 0.125977 0.778971 0.0966797 0.899414 0.0966797C1.08171 0.0966797 1.24121 0.163411 1.37793 0.296875L4.85938 3.87109H4.41504L7.88672 0.296875C8.02344 0.163411 8.18294 0.0966797 8.36523 0.0966797C8.48568 0.0966797 8.59473 0.125977 8.69238 0.18457C8.79329 0.243164 8.87305 0.322917 8.93164 0.423828C8.99023 0.52474 9.01953 0.635417 9.01953 0.755859C9.01953 0.934896 8.95605 1.08626 8.8291 1.20996L5.16211 4.97461C5.08398 5.05273 5.00098 5.11133 4.91309 5.15039C4.82845 5.1862 4.73568 5.20573 4.63477 5.20898Z"
        fill="#B9FFFF"
        animate={animate ? "end" : "start"}
        variants={arrowVariants}
      />
    </svg>
  );
};

export default ArrowIcon;

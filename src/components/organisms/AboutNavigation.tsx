import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import {
  CornerBottomLeftIcon,
  CornerBottomRightIcon,
  CornerTopLeftIcon,
  CornerTopRightIcon,
} from "@components";
import { GalleryNavigation } from "@constants";

interface Props {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string | undefined>>;
  navItems: string[];
}
const AboutNavigation = (props: Props) => {
  const { selectedItem, setSelectedItem, navItems } = props;

  return (
    <div className="about-navigation">
      {/* {Object.values(navItems).map((item, index) => ( */}
      {navItems.map((item, index) => (
        <div
          className={`about-navigation-item ${
            selectedItem === item ? "about-navigation-item-active" : ""
          }`}
          key={index}
          onClick={() => setSelectedItem(item)}
        >
          {item}
        </div>
      ))}
      {/* corner pieces */}
      <CornerTopLeftIcon />
      <CornerTopRightIcon />
      <CornerBottomLeftIcon />
      <CornerBottomRightIcon />
    </div>
  );
};

export default AboutNavigation;

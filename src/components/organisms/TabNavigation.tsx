import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import {
  CornerBottomLeftIcon,
  CornerBottomRightIcon,
  CornerTopLeftIcon,
  CornerTopRightIcon,
} from "@components";

interface Props {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string | undefined>>;
  navItems: string[];
}
const TabNavigation = (props: Props) => {
  const { selectedItem, setSelectedItem, navItems } = props;

  return (
    <div className="tab-navigation">
      {/* {Object.values(navItems).map((item, index) => ( */}
      {navItems.map((item, index) => (
        <div
          className={`tab-navigation-item ${
            selectedItem === item ? "tab-navigation-item-active" : ""
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

export default TabNavigation;

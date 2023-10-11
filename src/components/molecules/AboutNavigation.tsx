import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

interface Props {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  navItems: string[];
}
const AboutNavigation = (props: Props) => {
  const { selectedItem, setSelectedItem, navItems } = props;

  return (
    <div className="about-navigation">
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
      <Image
        src="/images/buttons/top-left-corner.svg"
        alt="Left Corner"
        width={8}
        height={8}
        className="absolute top-0 left-0"
      />
      <Image
        src="/images/buttons/top-right-corner.svg"
        alt="Right Corner"
        width={8}
        height={8}
        className="absolute top-0 right-0"
      />
    </div>
  );
};

export default AboutNavigation;

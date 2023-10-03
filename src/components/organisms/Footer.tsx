import { FC, HTMLAttributes } from "react";
import { footer } from "@constants";
import { Footer } from "@types";
import { FooterLinks } from "@components";

const Footer: FC = () => {
  const getCurrentYear = (): number => {
    return new Date().getFullYear();
  };

  return (
    <footer
      className="px-4 sm:px-8 lg:px-[10%] py-4 w-full bg-transparent z-0 bottom-0 flex flex-wrap justify-between"
      key="footer"
    >
      <Divider className="mb-6" />
      <div className="w-full md:w-1/4 pb-6 opacity-80 md:opacity-100 text-light-red">
        In Search Of: Substance
      </div>
      {footer.map((item: Footer, index) => (
        <FooterLinks
          item={item}
          index={index}
          key={index}
          className={`${index === 2 || index === 3 ? "hidden sm:flex" : ""}`}
        />
      ))}
      <div className="flex flex-col gap-2 sm:hidden">
        <FooterLinks item={footer[2]} index={2} />
        <FooterLinks item={footer[3]} index={3} />
      </div>
      <div className="w-full pb-2">
        <div className="flex flex-col md:w-1/3 lg:w-[38%]">
          <Divider
            showLeftTip={false}
            showRightTip={false}
            className="mt-14 lg:mt-24 mb-6"
          />
          <div className="text-light-red text-sm xl:text-base flex justify-between opacity-80 md:opacity-100">
            <p>@ {getCurrentYear()} All rights reserved.</p>
            <p>Powered by EXP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  showLeftTip?: boolean;
  showRightTip?: boolean;
}
const Divider: FC<DividerProps> = (props: DividerProps) => {
  const { showLeftTip = true, showRightTip = true, className } = props;
  return (
    <div className={`h-[1px] w-full flex gap-0 ${className}`}>
      {showLeftTip && <div className="bg-light-red opacity-60 w-[48px]"></div>}
      <div className="w-full bg-light-red opacity-30"></div>
      {showRightTip && <div className="bg-light-red opacity-60 w-[24px]"></div>}
    </div>
  );
};

export default Footer;

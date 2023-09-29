import { FC } from "react";
import { footer } from "@constants";
import { Footer, FooterLink } from "@types";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer
      className="px-4 sm:px-8 lg:px-[10%] py-4 w-full bg-transparent z-0 bottom-0 flex items-center"
      key="footer"
    >
      <div className="flex flex-wrap w-full justify-between">
        <div className="w-full md:w-1/4 pb-6">In Search Of: Substance</div>
        {footer.map((item: Footer, index) => (
          <div className="flex flex-col gap-1 text-sm md:text-base" key={index}>
            <p className="opacity-60 pb-3">{item.category}</p>
            {item.links.map((link: FooterLink, index) =>
              link.href.includes("https") ? (
                <a
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                  className="link"
                  key={index}
                >
                  {link.name}
                </a>
              ) : (
                <Link href={link.href} className="link" key={index}>
                  {link.name}
                </Link>
              )
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

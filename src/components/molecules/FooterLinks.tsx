import Link from "next/link";
import { HTMLAttributes, FC } from "react";
import { Footer, FooterLink } from "@types";

interface FooterLinksProps extends HTMLAttributes<HTMLDivElement> {
  item: Footer;
  index: number;
}
const FooterLinks: FC<FooterLinksProps> = (props: FooterLinksProps) => {
  const { item, index, className, ...componentProps } = props;
  return (
    <div
      className={`flex flex-col gap-0.5 text-sm md:text-base ${className}`}
      key={index}
      {...componentProps}
    >
      <p className="opacity-60 pb-1 sm:pb-3 text-light-red">{item.category}</p>
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
  );
};

export default FooterLinks;

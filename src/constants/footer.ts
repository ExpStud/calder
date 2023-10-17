import { Footer } from "@types";

export const footer: Footer[] = [
  {
    category: "About",
    links: [
      { name: "Overview", href: "/about/?id=overview" },
      { name: "Substance", href: "/about/?id=substance" },
      { name: "Searchers", href: "/about/?id=searchers" },
      { name: "Roadmap", href: "/about/?id=roadmap" },
      { name: "Team", href: "/about/?id=team" },
    ],
  },
  {
    category: "Gallery",
    links: [
      { name: "Searchers", href: "/gallery/?id=searchers" },
      { name: "Comic", href: "/gallery/?id=comic" },
      { name: "Airdrops", href: "/gallery/?id=airdrops" },
      { name: "Collabs", href: "/gallery/?id=collabs" },
    ],
  },
  {
    category: "Buy",
    links: [
      { name: "Exchange.art", href: "https://exchange.art/caldermoore/nfts" },
    ],
  },
  {
    category: "Socials",
    links: [
      { name: "Twitter", href: "https://twitter.com/caldermoore_" },
      { name: "Discord", href: "http://discord.gg/insearchof" },
    ],
  },
];

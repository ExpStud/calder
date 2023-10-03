import { Navigation } from "@types";

export const navigation: Navigation[] = [
  {
    id: 0,
    symbol: "iso",
    name: "Home",
    label: "Welcome to ISO",
    href: "/",
  },
  {
    id: 1,
    symbol: "iso",
    name: "About",
    label: "Search of Universe",
    href: "/about",
  },
  {
    id: 2,
    symbol: "iso",
    name: "Gallery",
    label: "Discover and Download Assets",
    href: "/gallery",
  },
  {
    id: 3,
    symbol: "iso",
    name: "My ISO",
    label: "Coming Soon...",
    href: "",
    disabled: true,
  },
  {
    id: 4,
    symbol: "iso",
    name: "Buy",
    label: "Buy NFTs on exchange.art",
    href: "https://exchange.art/caldermoore/nfts",
  },
];

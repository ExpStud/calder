export interface GalleryItemAssets {
  main: string;
  socials: string;
  pfp: string;
  thumbnail: string;
  bts: string
}

export interface NFT {
  mint: string;
}
export interface Searchers extends NFT {
  assets: GalleryItemAssets;
}
export interface Substance extends NFT {
}
export interface Airdrops extends NFT {
}
export interface Collabs extends NFT {
}



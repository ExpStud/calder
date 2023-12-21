export interface GalleryItemAssets {
  main: string;
  socials: string;
  thumbnail: string;
  pfp?: string;
  bts?: string
}

export interface NFT {
  mint: string;
  file: string;
}
export interface Searchers extends NFT {
  assets: GalleryItemAssets;
}
export interface Substance extends NFT {
  assets: GalleryItemAssets;
}
export interface Airdrops extends NFT {
  assets: GalleryItemAssets;
}
export interface Collabs extends NFT {
  assets: GalleryItemAssets;
}



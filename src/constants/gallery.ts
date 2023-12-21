import { Searchers, Substance } from "@types";

export enum GalleryNavigation {
  Searchers = "Searchers",
  Substance = "Substance",
  Airdrops = "Airdrops",
  Collabs = "Collabs",
}

export enum Factions {
  The_Coalition = "The Coalition",
  The_Voidborn = "The Voidborn",
  Lightbringers = "Lightbringers",
  Citizens_Of_Vulture = "Citizens of Vulture",
  Marauders = "Marauders",
  Merchant_Guild = "Merchant Guild",
}

export const galleryNav: string[] = [
  "Searchers",
  "Substance",
  "Chronicles",
  "Airdrop",
  "Collabs",
];

export const findIndexByMint = (mintToFind: string, array: Substance[] | Searchers[]): number => {
  const index = array.findIndex((item) => item.mint === mintToFind);
  return index;
};


export const searchers: Searchers[] = [
  {
    mint: "66hDA1TXxsQW5QMboR8i7scWTyF67L9PwobAAeCQ8Lax",
    file: "001-TheArtificer",
    assets : {
      main: "Artificer_.mp4",
      socials: "Artificer_Socials.mp4",
      pfp: "artificer_PFP",
      thumbnail: "ArtificerThumbnail.jpg",
      bts: "Artificer_BTS.mp4"
    }
  },
  {
    mint: "8UHM42FtJhif9qkcZ3QbPgmrrEPBdrUWn7PWMsyjapES",
    file: "002-IGOR",
    assets : {
      main: "IGOR_Master.mp4",
      socials: "IGOR_Master_socials.mp4",
      pfp: "IGOR_PFP.jpg",
      thumbnail: "IGORThumbnail.jpg",
      bts: "Clans_Team_PFP_02_Igor_BTS.mp4"
    }
  },
  {
    mint: "EoNnbS3Vbe1SbMUabMrnfaAQCNTweriNr4yMa8B66GJx",
    file: "003-Scout",
    assets : {
      main: "Scout.mp4",
      socials: "Scout_Socials.mp4",
      pfp: "Scout_PFP.jpg",
      thumbnail: "Scout_thumbnail.jpg",
      bts: "Clans_Monsters_PFP_01_Scout_BTS.mp4"
    }
  },
  {
    mint: "9jKuCEgbjQ1wbjU329UA4cNdetFL5NF5N27KKwFeNSiu",
    file: "004-MaxStarstrider",
    assets : {
      main: "max2.mp4",
      socials: "max2_Socials.mp4",
      pfp: "Max_PFP.jpg",
      thumbnail: "Max_thumbnail.jpg",
      bts: "Clans_Lightbringers_PFP_01_Max_BTS.mp4"
    }
  },
  {
    mint: "2wN3CYVCTTv1d85K7SsTK5RsuozSZjBhJ4Ke1XCbovXj",
    file: "005-SweetTooth",
    assets : {
      main: "Sweettooth.mp4",
      socials: "Sweettooth_socials.mp4",
      pfp: "SweetTooth_PFP.jpg",
      thumbnail: "Sweettooth_thumbnail.jpg",
      bts: "Clans_CrazyClan_PFP_01_Thug_BTS.mp4"
    }
  },
  {
    mint: "4MQeQeFCqKZie1jXLvwMD3WCNGPB4MmgJKa2gKivz4Za",
    file: "006-SophieTakahashi",
    assets : {
      main: "Sophie.mp4",
      socials: "Sophie_Socials.mp4",
      pfp: "Sophie_pfp_01.jpg",
      thumbnail: "Sophie_Thumbnail.jpg",
      bts: "Clans_Citizens_PFP_01_Sophie_BTS.mp4"
    }
  },
  {
    mint: "2LBtxFduPT9PpFAdfqow4D6oPGhL6cmmnJwwYZghzDxp",
    file: "007-TheRaven",
    assets : {
      main: "Raven.mp4",
      socials: "Raven_Socials.mp4",
      pfp: "Raven_pfp.jpg",
      thumbnail: "Raven_thumbnail.jpg",
      bts: "Clans_Citizens_PFP_01_Merchant_BTS.mp4"
    }
  },
];

export const substance: Substance[] = [
  {
    mint: "5AmQ2ZN9iAFWiBG1ffZu3mnM8kY4e9NSdXo9mnSgvhuj",
    file: "DesertCruisin",
    assets : {
      main: "01-DesertCruisin.mp4",
      socials: "01-DesertCruisin_Socials.mp4",
      thumbnail: "01-DesertCruisin_thumbanil.jpg",
      bts: ""
    }
  },
  {
    mint: "3ufyXceWwjWJDpneAHzbtiyW4t39twi7oHrSYeEH5jVm",
    file: "TheGreatOffering",
    assets : {
      main: "02-TheGreatOffering.mp4",
      socials: "02-TheGreatOffering_Socials.mp4",
      thumbnail: "02-TheGreatOffering_thumbnail.jpg",
      bts: "CalderMoore_ISO_BTS_BookCover_Sphere_V2.mp4"
    }
  },
  {
    mint: "42WCXCGpvREAWaQhvuo2SDFNiWUW5nGFaGgaP8j8xiq6",
    file: "TheShatteredGift",
    assets : {
      main: "03-TheShatteredGift.mp4",
      socials: "03-TheShatteredGift_Socials.mp4",
      thumbnail: "03-TheShatteredGift_Thumbnail.jpg",
      bts: "CalderMoore_ISO_BTS_Malachite.mp4"
    }
  },
  {
    mint: "51L9uf4BtKyPv3cPQWuQwrChJAnSA3oVMuoxJnmm3k8g",
    file: "TheEye",
    assets : {
      main: "04-TheEye.mp4",
      socials: "04-TheEye_Socials.mp4",
      thumbnail: "04-TheEye_Thumbnail.jpg",
      bts: "CalderMoore_ISO_BTS_BookCovers_TheEye.mp4"
    }
  },
  {
    mint: "2h2EqhSx6WvcJjCgGAZmTiTsfkgqje1MhoqXGAMjJWHu",
    file: "Lorne",
    assets : {
      main: "05-Lorne.mp4",
      socials: "05-Lorne_Socials.mp4",
      thumbnail: "05-Lorne_thumbnail.jpg",
      bts: ""
    }
  },
  {
    mint: "EwD8eUBZZT6wr8q24Q9uGYV8V8pgdg2gpWtUta7nCocv",
    file: "TheShadyTransaction",
    assets : {
      main: "06-TheShadyTransaction.mp4",
      socials: "06-TheShadyTransaction_Socials.mp4",
      thumbnail: "06-TheShadyTransaction_thumbnail.jpg",
      bts: ""
    }
  },
  {
    mint: "CtzGTnpQ8Jtvj8srHCYZbdoY6xESzcdDdAo7tonzhqza",
    file: "TheNight",
    assets : {
      main: "07-TheNight.mp4",
      socials: "07-TheNight_Socials.mp4",
      thumbnail: "07-TheNight_thumbnail.jpg",
      bts: ""
    }
  },
  {
    mint: "HpQGFHAg8AKKvgdPdwFnro4MjPb5WYbCGuQhnpqXW9pv",
    file: "InstrumentPanel",
    assets : {
      main: "08-InstrumentPanel.mp4",
      socials: "08-InstrumentPanel_socials.mp4",
      thumbnail: "08-InstrumentPanel_Thumbnail.jpg",
      bts: "CalderMoore_ISO_BTS_Console_V2.mp4"
    }
  },
  {
    mint: "Cv5Dv9bwuf9p3FWi5VmJkR5oeNwfGwujDcCzd8DKvjGB",
    file: "Substance",
    assets : {
      main: "09-Substance.mp4",
      socials: "09-Substance_Socials.mp4",
      thumbnail: "09-Substance_Thumbnail.jpg",
      bts: ""
    }
  },
  {
    mint: "EDvR6Ba97ez5TqhGRHbKp5wvfrPcTkTpnTQ4MesFDuxR",
    file: "DungeonCrawlin",
    assets : {
      main: "10-DungeonCrawlin.mp4",
      socials: "10-DungeonCrawlin_Socials.mp4",
      thumbnail: "10-DungeonCrawlin_thumbnail.jpg",
      bts: ""
    }
  },
  {
    mint: "GGDxZvaFxuM3DvYzrWfhzSXMEGnPjUrgpmGxPpRubYrm",
    file: "",
    assets : {
      main: "011_AncientTemple.mp4",
      socials: "011_AncientTemple_Socials.mp4",
      thumbnail: "11-TheAncientTemple_thumbnail.jpg",
      bts: ""
    }
  },
  {
    mint: "CenUyjSSBG7wr8dKuszM1Bd4aELoP53Tnie8EBwcHyFc",
    file: "",
    assets : {
      main: "12-TheShop.mp4",
      socials: "12-TheShop_Socials.mp4",
      thumbnail: "12-TheShop_thumbnail.jpg",
      bts: ""
    }
  },
  {
    mint: "A6dECeFWru57udc89FwHwzJcP9PgX8hY2hYfmZzF3MgQ",
    file: "AMessLeftBehind",
    assets : {
      main: "13-AMessLeftBehind.mp4",
      socials: "13-AMessLeftBehind_Socials.mp4",
      thumbnail: "13-AMessLeftBehind_thumbnail.jpg",
      bts: ""
    }
  },
]

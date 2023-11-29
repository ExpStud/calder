import { SubstanceAbout, Team } from "@types";

export const navItems: string[] = [
  "Overview",
  "Substance",
  "Searchers",
  "Roadmap",
  "Team",
];


export const substanceItems: SubstanceAbout[] = [
  {
    title: "The Goal",
    description:
      "The goal for this campaign will be to complete the story and create a physical version of the comic book. The book will include AR integration so the viewer can enjoy the story with the animations and soundtrack.",
  },
  {
    title: "How it Works",
    description:
      "Following the initial launch of the book covers; subsequent pages will be released (as editions) periodically throughout the next months. This allows you to complete your book as you follow along in the story.",
  },

  {
    title: "Whitelist",
    description:
      "All current In-Search-Of holders will have a presale window for the launch day of the campaign to collect a book cover to start their story. Holders of book covers will also have a presale window for each page release.",
  },

  {
    title: "AirDrops",
    description:
      "Throughout the story our main character “Lorne” will find and receive objects and artifacts. As he does, collectors that are holding all previous pages up to that point will receive airdrops of that item! These will have rarity based on the holders tier level. Some will have unique mechanics revealed down the line!",
  },

  {
    title: "Collabs",
    description:
      "Throughout the project holders of tiers 02, 03, and 04 will receive collaborative pieces featuring artists from the community! These pieces will help develop the story with new lore and exciting environments.",
  },

  {
    title: "Rewards",
    description:
      "Depending on the unlocked tier; holders will receive various rewards for their support. This includes the original soundtrack, a printed copy of the book, a 3D printed model (to be announced), and even a custom NFT!",
  },
];

export const team: Team[] = [
  {
    name: "Calder Moore",
    title: "Founder & Artist",
    bio: [
      "Growing up, making art has always been a passion of mine. Basically, since I could hold a crayon, I started the journey into a career of being an artist. Throughout high school I would take every art and computer course available, even taking summer courses for drawing and creating computer games.",
      "Falling into a construction job after high school that lasted for 4 years. That was the pivotal part of my life. Not being able to create everyday really took a toll on me and I had the realization that I had to find a career that better fit me, so I went back to school for 3D animation and modeling.",
      "Since then I got to work on TV shows for huge companies like Disney, Nickelodeon, Hasbro, and Lego. During this time I had dipped my toe into freelance, where I was able to work for some amazing clients like Google, The Royal Canadian Mint and Wizards Of the Coast for both DND and Magic: The Gathering.",
      "And well, 11 surreal years after that, here we are now, creating the biggest art project I have never even thought was possible.",
      "The project that is for the first time, MY vision, its time to rock this shit"
    ],
    image: "/images/about/calder-pfp.png",
    twitter: "https://twitter.com/caldermoore_",
  },
  {
    name: "Dusko Sound",
    bio: [
      "The youngest of 3 brothers skilled in various art forms, and a multi instrumentalist since using cookware as a drum kit in infancy, I viewed musicianship as fun rather than vocation until getting my hands on a bass guitar and then that was it. That's all I did. Cut my teeth with a giant vintage Epiphone T bird that was comically too big for me. I assimilated the patterns and stylings of Flea, Rex Brown, Cliff Burton, Victor Wooten and more.",
      "Moved to BC Canada with the intent of passing through on my way to Musicians Institute of Hollywood, and never left. Formed a band and developed it to the point of being approached to record with Bob Rock (Metallica, 311) but instead, stepped away and took a break from practically living in a studio for 11 years. Then after 2 years of living a normal life I was finally shown proper electronic music, and - again, that was it. I purchased Ableton, and that's all I did.",
      "Within a few years of rigorous study, practice, and mentorship I co created a 6 figure selling soft synth preset library that was given great reviews from Stickybuds, Slynk, Phuture Primitive and more - and developed an extensive accompanying educational course, followed by an EP, an LP that was remixed by notable producers from around the world (Ahee, Pedestrian Tactics, HullabaloO and more), followed by another brief break from living in a studio. During this last break from music my passion became conveying hearing motion synesthesia and synthesizing reality through the lens of sound.",
      "Soon after, digital artists began outsourcing audio for higher value NFTs which presented me with the option of taking a holistic approach to mastering the sonic arts by experimenting with any unfamiliar genre or aesthetic proposed to me and in quick succession. This phase led me to focus on post production, game audio and another rigorous training period that incorporated certification from Berklee College Of Music to complement the usual intensive self directed regimen."
    ],
  },
  
];

// export enum AboutNav {
//   Overview,
//   Substance,
//   Searchers,
//   Roadmap,
//   Team,
// }

// export enum SubstanceItems {
//   "The Goal",
//   "How it Works",
//   "Whitelist",
//   "AirDrops",
//   "Collabs",
//   "Rewards",
//   "PFPs",
// }

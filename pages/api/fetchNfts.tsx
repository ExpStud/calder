// pages/api/fetchNfts.ts
import { NextApiRequest, NextApiResponse } from "next";
import { findNftByMint } from "@utils";
import { PublicKey } from "@solana/web3.js";
import { Connection } from "@solana/web3.js";
interface SearchersQuery {
  mintArray: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    // Ensure the mintArray parameter is of type SearchersQuery
    let { mintArray } = req.query;
    mintArray = JSON.parse(mintArray as string);
    const connection = new Connection(
      "https://mainnet.helius-rpc.com/?api-key=fd98bcfd-5344-4cc0-8ac1-db7ba9603613",
      "confirmed"
    );

    // map the mintAddresses array into an array of promises
    if (!Array.isArray(mintArray)) {
      console.log("Internal Server Error");
      return res.status(500).json({ error: "Internal Server Error" });
    }
    const nftPromises = mintArray.map(async (searcher) => {
      const nft = await findNftByMint(connection, new PublicKey(searcher));

      return nft;
    });

    // await all the promises and collect the results
    const nftResults = await Promise.all(nftPromises);

    // filter out null values and send the response
    const filteredNfts = nftResults.filter((nft) => nft !== null);
    res.status(200).json(filteredNfts);
  } catch (error) {
    console.error("Error parsing searchers parameter:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

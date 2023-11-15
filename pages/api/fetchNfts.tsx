// pages/api/fetchNfts.ts
import { NextApiRequest, NextApiResponse } from "next";
import { findNftByMint } from "@utils";
import { PublicKey } from "@solana/web3.js";
import { Connection } from "@solana/web3.js";
interface SearchersQuery {
  searchers: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    // Ensure the searchers parameter is of type SearchersQuery
    let { searchers } = req.query;
    searchers = JSON.parse(searchers as string);
    const connection = new Connection(
      "https://mainnet.helius-rpc.com/?api-key=fd98bcfd-5344-4cc0-8ac1-db7ba9603613",
      "confirmed"
    );

    console.log("searchers ", searchers);

    // map the mintAddresses array into an array of promises
    if (!Array.isArray(searchers)) {
      console.log("Internal Server Error");
      return res.status(500).json({ error: "Internal Server Error" });
    }
    const nftPromises = searchers.map(async (searcher) => {
      const nft = await findNftByMint(connection, new PublicKey(searcher));
      // console.log("nft ", nft);
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

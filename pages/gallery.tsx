import { PageLayout, GalleryView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Gallery: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout headerType="absolute" assets={assets}>
      <GalleryView />
    </PageLayout>
  );
};

export default Gallery;

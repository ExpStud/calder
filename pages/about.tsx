import { PageLayout, AboutView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const About: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout headerType="scroll" assets={assets}>
      <AboutView />
    </PageLayout>
  );
};

export default About;

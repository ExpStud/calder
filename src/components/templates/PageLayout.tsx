import { FC, ReactNode, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  ImageModal,
} from "@components";
import { enterAnimation, ViewContext } from "@constants";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: ReactNode;
  footer?: boolean;
  fixed?: boolean;
  headerType?: string;
  assets?: boolean[];
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    footer = true,
    fixed = false,
    headerType = "absolute",
    children,
    assets = [],
  } = props;

  //context for splash screen & modals
  const [showView, setShowView] = useState<boolean>(false);
  const [ImageModalId, setImageModalId] = useState<number>(-1);
  const value = {
    showView,
    setShowView,
    ImageModalId,
    setImageModalId,
  };

  return (
    <div
      className={`flex flex-col min-h-[100svh] max-w-screen items-center justify-between  ${
        fixed ? "absolute inset-0" : ""
      }`}
    >
      <PageHead
        title="Calder"
        description="Calder Moore [meta tag images, description needed]"
        url="https://addurl.xyz" //no backslash at the end
        twitter="CalderMoore_"
      />
      <ViewContext.Provider value={value}>
        <Header type={headerType} />

        {/* body */}
        <motion.main
          className={`relative flex flex-col h-full w-full overflow-x-clip max-w-[2000px] `}
          {...enterAnimation}
        >
          {children}
          <div className="absolute w-[900px] h-[900px] scale-75 xl:scale-90 4xl:scale-150 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-shine-rgba blur-[400px] -z-10" />
        </motion.main>

        {footer && <Footer />}

        {/* modals */}
        {/* {assets && <SplashScreen assets={assets} />} */}
        <AnimatePresence mode="wait">
          {ImageModalId !== -1 && (
            <ImageModal
              key="gallery-modal"
              imageId={ImageModalId}
              setImageId={setImageModalId}
            />
          )}
        </AnimatePresence>
      </ViewContext.Provider>
    </div>
  );
};
export default PageLayout;

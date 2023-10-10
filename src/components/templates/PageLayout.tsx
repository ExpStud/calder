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
      className={`flex flex-col lg:min-h-screen h-full justify-between overflow-none  ${
        fixed ? "absolute inset-0" : ""
      }`}
    >
      <PageHead
        title="Calder"
        description="Calder Moore bombaclat ya"
        url="https://addurl.xyz/"
        twitter="CalderMoore_"
      />
      <ViewContext.Provider value={value}>
        {/* header */}
        <Header type={headerType} />

        {/* body */}
        <motion.main
          className={`relative flex flex-col h-full w-full overflow-x-clip`}
          {...enterAnimation}
        >
          {children}
          <div className="absolute w-[900px] h-[900px] scale-75 xl:scale-90 4xl:scale-150 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-shine-rgba blur-[400px]" />
          {/* <div className="absolute w-[900px] xl:w-[50vw] h-1/2 xl:h-[50vw] md:-top-[40%] md:left-1/2 transform md:-translate-x-1/2 rounded-full bg-shine-rgba blur-[450px]" /> */}
        </motion.main>

        {/* footer */}
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

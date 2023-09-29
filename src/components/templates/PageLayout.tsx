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
        title="Name"
        description="Description"
        url="https://addurl.xyz/"
        twitter="twitterhandle"
      />
      <ViewContext.Provider value={value}>
        {/* header */}
        <Header type={headerType} />

        {/* body */}
        <motion.main
          className={`flex flex-col h-full w-full overflow-x-clip`}
          {...enterAnimation}
        >
          {children}
        </motion.main>

        {/* footer */}
        {footer && <Footer />}

        {/* modals */}
        {assets && <SplashScreen assets={assets} />}
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

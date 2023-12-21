import {
  Dispatch,
  FC,
  SetStateAction,
  use,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { FindNftByMintOutput } from "@metaplex-foundation/js";
import {
  CornerBottomLeftIcon,
  CornerBottomRightIcon,
  CornerTopLeftIcon,
  CornerTopRightIcon,
  ImageShimmer,
} from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { GalleryNavigation, fastEnterAnimation } from "@constants";
import { Airdrops, Collabs, Searchers, Substance } from "@types";
import { isMobile } from "react-device-detect";

interface Props {
  item: Searchers | Substance | Airdrops | Collabs;
  metadata: FindNftByMintOutput | undefined;
  index: number;
  isSelected: boolean;
  setSelectedGalleryItem?: (metadata: FindNftByMintOutput) => void;
  selectedNavItem: GalleryNavigation | undefined;
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;
}

const GalleryImageItem: FC<Props> = (props: Props) => {
  const {
    item,
    metadata,
    index,
    isSelected,
    setSelectedGalleryItem,
    selectedNavItem,
    isMuted,
    setIsMuted,
  } = props;

  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const [dimensions, setDimensions] = useState<string>(
    "w-[300px] h-[300px] md:w-[326px] md:h-[326px]"
  );

  useEffect(() => {
    if (selectedNavItem === GalleryNavigation.Searchers) {
      setDimensions("w-[300px] h-[300px] md:w-[326px] md:h-[326px]");
    } else if (selectedNavItem === GalleryNavigation.Substance) {
      setDimensions("w-[300px] h-[391px] md:w-[326px] md:h-[425px]");
    }
  }, [selectedNavItem]);

  //handle single case of video
  const isVideo = (): boolean => {
    const searchString = "nftstorage.link";
    const url = metadata?.json?.image as string;
    return url.includes(searchString);
  };

  //find asset in file path
  const getAsset = (asset: string) => {
    return `/images/gallery/${selectedNavItem?.toLocaleLowerCase()}/${
      item.file
    }/${asset}`;
  };

  //set play video state
  useEffect(() => {
    if (isSelected) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  }, [isSelected]);

  //trigger video play
  useEffect(() => {
    if (videoRef.current) {
      if (play) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [play]);

  return (
    //src="/images/gallery/substance/Lorne/005-Lorne_Socials.mp4"
    <div
      onClick={() =>
        setSelectedGalleryItem && metadata && setSelectedGalleryItem(metadata)
      }
      className={`relative flex-shrink-0 p-4 border border-color mb-4 overflow-hidden transition-300 ${
        isSelected
          ? "!border-gold !border-opacity-80 bg-gold bg-opacity-10"
          : ""
      }`}
    >
      <div className="overflow-hidden">
        {/* placeholder */}
        {!metadata?.json?.image && (
          <div key="placeholder">
            <Image
              src="/images/placeholder.png"
              width={326}
              height={
                selectedNavItem === GalleryNavigation.Substance ? 425 : 326
              }
              alt={`0${index}`}
              className={`${dimensions}`}
              objectFit={"cover"}
            />
          </div>
        )}

        {/* )} */}
        {isMobile && (metadata?.json?.image as string) && (
          <Image
            src={getAsset(item.assets.thumbnail)}
            width={326}
            height={326}
            alt={`0${index}`}
            className={`${dimensions} transition-all duration-[650ms] hover:scale-[1.15] overflow-hidden cursor-pointer object-contain`}
          />
        )}
        {(metadata?.json?.image as string) && (
          <video
            ref={videoRef}
            src={getAsset(item.assets.socials)}
            width={326}
            height={326}
            // autoPlay={isSelected}
            muted={isMuted}
            loop
            className={`${dimensions} transition-all duration-[650ms] hover:scale-[1.15] overflow-hidden cursor-pointer object-contain`}
            placeholder="/images/placeholder.png"
            onLoadedData={() => setVideoLoaded(true)}
          />
        )}
      </div>
      {isSelected && (
        <>
          {/* borders */}
          <motion.div {...fastEnterAnimation}>
            <CornerBottomLeftIcon gold />
            <CornerBottomRightIcon gold />
            <CornerTopLeftIcon gold />
            <CornerTopRightIcon gold />
          </motion.div>

          {/* video/control */}
          {!isMobile && (
            <motion.div
              {...fastEnterAnimation}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[40px] backdrop-blur-sm bg-black bg-opacity-70 border border-gold border-opacity-80 flex justify-around items-center"
            >
              <div
                className="cursor-pointer p-3 z-10"
                onClick={() => setIsMuted(!isMuted)}
              >
                <Image
                  src="/images/icons/gold-volume-pause.svg"
                  width={17}
                  height={17}
                  alt="Play"
                />
              </div>
              <div
                className="cursor-pointer p-3 z-10"
                onClick={() => setPlay(!play)}
              >
                <Image
                  src="/images/icons/gold-pause.svg"
                  width={11}
                  height={16}
                  alt="Play"
                />
              </div>
              <div
                className="cursor-pointer p-3 z-10"
                onClick={() => {
                  setIsMuted(true);
                  window.open(getAsset(item.assets.main), "_blank");
                }}
              >
                <Image
                  src="/images/icons/gold-expand.svg"
                  width={16}
                  height={16}
                  alt="Play"
                />
              </div>
              <CornerBottomLeftIcon gold />
              <CornerBottomRightIcon gold />
              <CornerTopLeftIcon gold />
              <CornerTopRightIcon gold />
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

{
  /* </AnimatePresence> */
}
{
  /* {metadata?.json?.image && !isVideo() && (
          <Image
            src={metadata.json?.image}
            width={326}
            height={326}
            alt={`0${index}`}
            className={`${dimensions} transition-all duration-[650ms] hover:scale-[1.15] overflow-hidden cursor-pointer object-contain`}
          />
        )}
        {metadata?.json?.image && isVideo() && (
          <video
            src={metadata.json?.image}
            width={326}
            height={326}
            autoPlay
            muted
            playsInline
            loop
            className={`${dimensions} transition-all duration-[650ms] hover:scale-[1.15] overflow-hidden cursor-pointer object-contain`}
          />
        )} */
}

{
  /* {metadata?.json?.animation_url && (
          <video
            src={metadata.json?.animation_url}
            width={326}
            height={326}
            autoPlay
            muted
            playsInline
            loop
            className={`${dimensions} transition-all duration-[650ms] hover:scale-[1.15] overflow-hidden cursor-pointer object-contain`}
          />
        )} */
}
export default GalleryImageItem;

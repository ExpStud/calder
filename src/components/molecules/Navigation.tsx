import { FC, useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@components";
import { fastExitAnimation, navigation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@types";
import Image from "next/image";
import { useRouter } from "next/router";

const Navigation: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [scope, setScope] = useState<Navigation>();

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/") setScope(navigation[0]);
    else if (router.asPath === "/about") setScope(navigation[1]);
    else if (router.asPath === "/gallery") setScope(navigation[2]);
    else if (router.asPath === "/buy") setScope(navigation[4]);
  }, [router.asPath]);

  return (
    <div className="navigation button-template">
      {/* corner pieces */}
      <Image
        src="/images/buttons/top-left-corner.svg"
        alt="Left Corner"
        width={8}
        height={8}
        className="absolute top-0 left-0"
      />
      <Image
        src="/images/buttons/top-right-corner.svg"
        alt="Right Corner"
        width={8}
        height={8}
        className="absolute top-0 right-0"
      />
      {/* center content */}
      {scope && (
        <div className="flex items-center gap-6 h-full">
          <p className="navigation-symbol">{scope.symbol}</p>
          <p className="uppercase text-light-red font-teko-thin pt-1 text-2xl tracking-wider">
            <span className="opacity-60">0{scope.id + 1}</span> {scope.name}
          </p>
          <p className="uppercase font-teko-thin pt-1 text-2xl tracking-wider pl-4">
            {scope.label}
          </p>
        </div>
      )}

      {/* icons */}
      <AnimatePresence mode="wait">
        {!openMenu ? (
          <motion.div
            key="menu-icon"
            onClick={() => setOpenMenu(true)}
            className="cursor-pointer "
            {...fastExitAnimation}
          >
            <MenuIcon />
          </motion.div>
        ) : (
          <motion.div
            onClick={() => setOpenMenu(false)}
            className="cursor-pointer z-[100]"
            {...fastExitAnimation}
          >
            <CloseIcon />
          </motion.div>
        )}
      </AnimatePresence>
      {/* <Menu toggleMenu={setOpenMenu} open={openMenu} /> */}
    </div>
  );
};
export default Navigation;

"use client";

import clsx from "clsx";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { HeaderProps } from "./types";
import Link from "next/link";
import { getNextRoute } from "@src/helpers/routes";

const Header = ({ openSearch }: HeaderProps): ReactElement => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMobile) {
        if (currentScrollY > lastScrollY && !isScrollingDown) {
          setIsScrollingDown(true);
        } else if (currentScrollY < lastScrollY && isScrollingDown) {
          setIsScrollingDown(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isScrollingDown, isMobile]);

  useEffect(() => {
    if (isMobile) {
      const timeout = setTimeout(() => {
        setIsVisible(!isScrollingDown);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setIsVisible(true);
    }
  }, [isScrollingDown, isMobile]);

  const renderLogo = (): ReactElement => {
    return (
      <Link href={getNextRoute("home")}>
        <Image
          src="/pokedex.png"
          alt="pokedex-logo"
          width={200}
          height={200}
          className="w-20 h-auto sm:w-28 sm:h-auto lg:w-32"
        />
      </Link>
    );
  };

  const renderMobileSearch = (): ReactElement => {
    return (
      <button className="flex items-center justify-center" onClick={openSearch}>
        <Image
          src="/search.svg"
          alt="mobile-search-icon"
          width={50}
          height={50}
          className="w-8 h-auto sm:w-10 lg:w-12"
        />
      </button>
    );
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 flex justify-between items-center bg-red-500 w-full h-20 sm:h-24 lg:h-28 border-b-4 border-black px-8 lg:px-6 sm:px-4 transition-transform duration-300 ease-in-out z-[99]",
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      )}
    >
      {renderLogo()}
      {renderMobileSearch()}
    </header>
  );
};

export default Header;

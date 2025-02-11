"use client";

import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { SiteIcon } from "./icons/SiteIcon";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  setIsCollapsibleOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ setIsCollapsibleOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAboutMeClick = () => {
    setIsCollapsibleOpen(true);
    setIsMobileMenuOpen(false);
  };

  const { scrollDirection } = useScroll();

  return (
    <header
      className={cn(
        "fixed w-full backdrop-blur-md z-50 transition-all duration-300 p-2",
        scrollDirection === "down" ? "-top-24" : "top-0",
        scrollDirection === "up" && "shadow-md"
      )}
    >
      <Section className="flex justify-between items-center max-w-5xl">
        <Link href="/">
          <SiteIcon size={48} />
        </Link>

        <ul className="hidden sm:flex space-x-6 items-center font-heading">
          <li>
            <Link href="#about-me" onClick={() => setIsCollapsibleOpen(true)}>
              o A propos
            </Link>
          </li>
          <li>
            <Link href="#work">o Projets</Link>
          </li>
          <li>
            <Link href="#contact">o Contact</Link>
          </li>
          <li>
            <a
              href="/CV - Maxime Faure - Developpeur JS.pdf"
              download="CV_Faure_Maxime"
            >
              <Button
                className="transition ease-in-out duration-300 hover:shadow-[0px_6px_0px_0px_black] hover:-translate-y-2"
                variant={"normal"}
              >
                Mon CV
              </Button>
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Section>

      {/* Mobile menu */}
      <div className={cn("sm:hidden", isMobileMenuOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="#about-me"
            className="font-heading block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            onClick={handleAboutMeClick}
          >
            o A propos
          </Link>
          <Link
            href="#work"
            className="font-heading block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            onClick={handleMobileMenuClick}
          >
            o Projets
          </Link>
          <Link
            href="#contact"
            className="font-heading block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            onClick={handleMobileMenuClick}
          >
            o Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

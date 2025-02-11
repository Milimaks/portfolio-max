"use client";

import { useState } from "react";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { MyNetworks } from "./_components/MyNetworks";
import { MyWorks } from "./_components/MyWorks";
import { Spacing } from "./_components/Spacing";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState<boolean>(false);
  return (
    <TooltipProvider delayDuration={200}>
      <main>
        <Header setIsCollapsibleOpen={setIsCollapsibleOpen} />
        <Spacing size="md" />
        <Hero
          isCollapsibleOpen={isCollapsibleOpen}
          setIsCollapsibleOpen={setIsCollapsibleOpen}
        />
        <Spacing size="md" />
        <MyWorks />
        <Spacing size="md" />
        <Contact />
        <Spacing size="md" />
        <Footer />
        <MyNetworks />
      </main>
    </TooltipProvider>
  );
}

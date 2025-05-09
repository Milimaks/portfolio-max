"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { DrupalIcon } from "./icons/DrupalIcon";
import { GraphQLIcon } from "./icons/GraphQLIcon";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { JqueryIcon } from "./icons/JqueryIcon";
import { MUIIcon } from "./icons/MUIIcon";
import { NestIcon } from "./icons/NestIcon";
import { NextIcon } from "./icons/NextIcon";
import { PhpIcon } from "./icons/PhpIcon";
import { PlaywrightIcon } from "./icons/PlaywrightIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { RemixIcon } from "./icons/RemixIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { ModalDetail } from "./ModalDetail";
import { Section } from "./Section";
import { VerticalTabs } from "./VerticalTabs";
import { missions } from "@/data/dataModal";
import { DockerIcon } from "./icons/DockerIcon";

export const MyWorks = () => {
  const [selectedMission, setSelectedMission] = useState<string | null>(null);

  const tabItems = [
    {
      id: "01",
      title: "Freelance",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold font-heading text-primary">
            Développeur React Node.js
          </h2>
          <p className="text-sm font-heading text-primary/50">
            Août 2024 - Aujourd'hui
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary font-heading mr-2">▸</span>
              <span className="text-primary">
                Maintenance d'une application de gestion de parc automobile sur
                la partie Front-End
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span className=" text-primary">
                Développement d'un site vitrine pour une entreprise de sécurité
                incendie
              </span>
            </li>
          </ul>
          <Badge variant="outline">Skills</Badge>
          <div className="flex items-center gap-4 text-black">
            <ReactIcon size={30} />
            <NestIcon size={30} />
            <NextIcon size={30} />
            <RemixIcon size={30} />
            <TypescriptIcon size={30} />
            <TailwindIcon size={30} />
          </div>
        </div>
      ),
    },
    {
      id: "02",
      title: "HubeeCar",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold font-heading text-primary">
            Développeur React Node.js
          </h2>
          <p className="text-sm font-heading text-primary/50">
            Novembre 2023 - Novembre 2024
          </p>
          <button
            className="font-heading text-primary p-0 cursor-pointer hover:underline"
            onClick={() => setSelectedMission("HubeeConnect")}
          >
            HubeeConnect
          </button>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary  mr-2">▸</span>
              <span className="text-primary">
                Développement d'une plateforme de gestion de parc automobiles
                communiquant avec une application mobile
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary  mr-2">▸</span>
              <span className="text-primary">
                Rédaction de la documentation technique pour faciliter la
                maintenance et l’évolution de la plateforme.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary  mr-2">▸</span>
              <span className="text-primary">
                Écriture de tests end-to-end avec Playwright pour assurer la
                fiabilité et la stabilité de l’application.
              </span>
            </li>
          </ul>
          <Badge variant="outline">Skills</Badge>
          <div className="flex items-center gap-4 text-black">
            <ReactIcon size={30} />
            <GraphQLIcon size={30} />
            <TypescriptIcon size={30} />
            <MUIIcon size={30} />
            <PlaywrightIcon size={30} />
          </div>
        </div>
      ),
    },
    {
      id: "03",
      title: "CGI",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold font-heading text-primary">
            Ingénieur en Technologie de l'information
          </h2>
          <p className="text-sm font-heading text-primary/50">
            Novembre 2022 - Novembre 2023
          </p>

          <button
            className="font-heading text-primary p-0 cursor-pointer hover:underline"
            onClick={() => setSelectedMission("airbus")}
          >
            Airbus : Dashboard
          </button>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span className="text-primary">
                Développement d'une application interne entreprise pour le suivi
                de projet, notamment la partie financière
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span className="text-primary">
                Développement de l'application desktop en React
              </span>
            </li>
          </ul>
          <button
            className="font-heading text-primary p-0 cursor-pointer hover:underline"
            onClick={() => setSelectedMission("sncf_uas")}
          >
            SNCF : UAS
          </button>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span className="text-primary">
                Développement fullstack d'un site web de base pour la SNCF
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span className="text-primary">
                Reprise du design initial de "l'usine à sites" pour d'autres
                sites web de la SNCF
              </span>
            </li>
          </ul>
          <button
            className="font-heading text-primary p-0 cursor-pointer hover:underline"
            onClick={() => setSelectedMission("sncf_publimmo")}
          >
            SNCF : E-Publimmo
          </button>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span className="text-primary">
                Refonte graphique complète d'un site existant pour la SNCF sur
                des annonces immobilières
              </span>
            </li>
          </ul>
          <Badge variant="outline">Skills</Badge>
          <div className="flex items-center gap-4 text-black">
            <ReactIcon size={30} />
            <DrupalIcon size={30} />
            <JavascriptIcon size={30} />
            <PhpIcon size={30} />
            <JqueryIcon size={36} />
            <DockerIcon size={30} />
          </div>
        </div>
      ),
    },
    {
      id: "04",
      title: "8D Concept",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold font-heading text-primary">
            Développeur React Node.js
          </h2>
          <p className="text-sm font-heading text-primary/50">
            Novembre 2020 - Novembre 2022
          </p>

          <button
            className="font-heading text-primary p-0 cursor-pointer hover:underline"
            onClick={() => setSelectedMission("HubeeConnect")}
          >
            HubeeConnect
          </button>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary  mr-2">▸</span>
              <span className="text-primary">
                Développement d'une plateforme de gestion de parc automobiles
                communiquant avec une application mobile
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary  mr-2">▸</span>
              <span className="text-primary">
                Rédaction de la documentation technique pour faciliter la
                maintenance et l’évolution de la plateforme.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary  mr-2">▸</span>
              <span className="text-primary">
                Écriture de tests end-to-end avec Playwright pour assurer la
                fiabilité et la stabilité de l’application.
              </span>
            </li>
          </ul>
          <h3 className="font-heading text-primary p-0">
            Développement d’une application de gestion administrative
          </h3>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary  mr-2">▸</span>
              <span className="text-primary">
                Le développement de l’application desktop en React
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary  mr-2">▸</span>
              <span className="text-primary">
                Respect du Design System de la maquette Figma
              </span>
            </li>
          </ul>
          <Badge variant="outline">Skills</Badge>
          <div className="flex items-center gap-4 text-black">
            <ReactIcon size={30} />
            <GraphQLIcon size={30} />
            <TypescriptIcon size={30} />
            <MUIIcon size={30} />
            <PlaywrightIcon size={30} />
          </div>
        </div>
      ),
    },
  ];
  return (
    <Section id="work">
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Parcours professionnel{" "}
      </h2>
      <div className=" flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <VerticalTabs items={tabItems} />
        </div>
        {selectedMission &&
          missions[selectedMission as keyof typeof missions] && (
            <ModalDetail
              {...missions[selectedMission as keyof typeof missions]}
              isOpen={true}
              onClose={() => setSelectedMission(null)}
            />
          )}
      </div>
    </Section>
  );
};

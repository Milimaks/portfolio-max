import Carousel from "./Carousel";
import { Section } from "./Section";
import { SkillsBackEnd } from "./Skills_BackEnd";
import { SkillsDesign } from "./Skills_Design";
import { SkillsFrontEnd } from "./Skills_FrontEnd";
import { SkillsFullStack } from "./Skills_FullStack";
import { Spacing } from "./Spacing";

export const AboutMe = () => {
  return (
    <Section className="flex flex-col max-md:flex-col items-start gap-4 mt-32 p-0">
      <div>
        <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
          Main Skills
        </h2>
        <div className="flex flex-col gap-4 pt-4">
          <SkillsFullStack />
          <SkillsFrontEnd />
          <SkillsBackEnd />
          <SkillsDesign />
        </div>
        <Spacing size="md" />
        <div className="flex flex-col gap-4 " id="about-me">
          <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
            A propos de moi
          </h2>
          <div className="flex gap-2 max-md:flex-col">
            <p className="text-primary basis-1/2">
              Avant de débuter mon aventure professionnelle en informatique,
              j'ai été pendant plusieurs années conducteur de travaux dans le
              secteur du bâtiment. Même si j'ai adoré la gestion de projet, le
              management et le contact avec les entreprises, le domaine
              professionnelle ne me convenait pas. J'ai alors fait un virage a
              180° pour me reconvertir dans l'informatique après un passage dans
              un incubateur de start-up. Et me voici aujourd'hui, totalement fan
              de l'univers du développement web et prêt à vous aider dans vos
              projets avec en plus de ça, une vraie expertise dans la gestion de
              projet et le travail en équipe !
            </p>
            <Carousel />
          </div>
        </div>
      </div>
    </Section>
  );
};

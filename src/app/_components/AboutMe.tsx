import { Section } from "./Section";

export const AboutMe = () => {
  return (
    <Section className="flex flex-col max-md:flex-col items-start gap-4 mt-32  max-w-3xl">
      <div>
        <div>
          <h2 className="text-3xl font-bold text-primary-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Avant de débuter mon aventure professionnelle en informatique, j'ai
            été pendant plusieurs années conducteur de travaux dans le secteur
            du bâtiment. Même si j'ai adoré la gestion de projet, le management
            et le contact avec les entreprises, le domaine professionnelle ne me
            convenait pas. J'ai alors fait un virage a 180° pour me reconvertir
            dans l'informatique après un passage dans un incubateur de start-up.
            Et me voici aujourd'hui, totalement fan de l'univers du
            développement web et prêt à vous aider dans vos projets avec en plus
            de ça, une vraie expertise dans la gestion de projet et le travail
            en équipe !
          </p>
        </div>
      </div>
    </Section>
  );
};

import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4" id="contact">
      <h2 className="text-3xl font-bold text-primary ">Envie d'échanger ?</h2>
      <h2 className="scroll-m-20  pb-2  tracking-tight first:mt-0">
        Je serai ravi de discuter de vos projets, de répondre à vos questions,
        alors n'hésitez pas à me contacter !
      </h2>
      <div className="flex max-md:flex-col gap-4 ">
        <ContactCard
          name="Github"
          description="View my projects"
          image="/profile.jpeg"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1024px-GitHub_Invertocat_Logo.svg.png"
          className="cursor-pointer"
        />
        <ContactCard
          name="Linkedin"
          description="View my profile"
          image="/profile.jpeg"
          mediumImage="linkedin-icon.svg"
          className="cursor-pointer"
        />
      </div>
    </Section>
  );
};

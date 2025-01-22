import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption text-5xl">Maxime Faure</h2>
        <h3>Frontend Developper</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, iusto
          excepturi? Saepe voluptate eius ratione accusamus neque, aliquam
          officiis minima voluptatum beatae nihil? Laborum qui ullam quaerat
          quae. Temporibus, nihil. Est fugit eum accusamus tempore in illum ipsa
          quis magni! Dolore autem unde nam, expedita officia impedit eos facere
          modi ipsa. Vel optio, magnam vero asperiores voluptate id commodi
          assumenda.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/my-face.png"
          alt="Maxime Faure - Picture"
          className="w-full h-auto rounded-full max-w-sm"
        />
      </div>
    </Section>
  );
};

import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <Section>
        <p className="text-sm text-muted-foreground">
          &copy; 2025 - Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </Section>
    </footer>
  );
};

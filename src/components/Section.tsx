import { type ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function Section({ children, id, className = "", containerClassName = "" }: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

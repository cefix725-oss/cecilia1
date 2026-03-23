import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, children, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="h-px w-8 bg-primary/40" />
        <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary">
          {title}
        </span>
        <div className="h-px w-8 bg-primary/40" />
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;

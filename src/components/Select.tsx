import { type SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", error, ...props }, ref) => {
    const base =
      "w-full rounded-lg border bg-[var(--card)] px-4 py-3 text-[var(--text)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:ring-offset-0";
    const border = error ? "border-red-500" : "border-[var(--border)]";

    return (
      <select ref={ref} className={`${base} ${border} ${className}`} {...props} />
    );
  }
);

Select.displayName = "Select";

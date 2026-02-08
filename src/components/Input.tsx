import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => {
    const base =
      "w-full rounded-lg border bg-[var(--card)] px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:ring-offset-0";
    const border = error ? "border-red-500" : "border-[var(--border)]";

    return (
      <input
        ref={ref}
        className={`${base} ${border} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

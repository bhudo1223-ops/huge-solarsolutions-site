import { type ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  help?: string;
  error?: string;
  children: ReactNode;
}

export function FormField({
  label,
  htmlFor,
  required,
  help,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-[var(--text)]"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {help && (
        <p className="text-sm text-[var(--text)]">{help}</p>
      )}
      {children}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

import { type ReactNode, type ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: never;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

interface ButtonAsLink extends BaseProps {
  href: string;
  loading?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  className = "",
  variant = "primary",
  href,
  loading = false,
  disabled,
  ...rest
}: ButtonProps & { disabled?: boolean }) {
  const base =
    "btn-shared shrink-0 gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "cta-amber",
    secondary: "bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue-hover)]",
    outline:
      "border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/5",
  };

  const combined = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={(rest as ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"}
      className={combined}
      disabled={disabled || loading}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Submitting…
        </>
      ) : (
        children
      )}
    </button>
  );
}

import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = "primary", className = "", onClick }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700",
    outline: "border border-neutral-200 bg-transparent hover:bg-neutral-50 text-neutral-900 dark:border-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-900"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
}

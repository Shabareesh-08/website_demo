import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-teal-600 text-neutral-0 hover:bg-teal-700",
        navy: "bg-navy-900 text-neutral-0 hover:bg-navy-800",
        outline: "border border-navy-900/20 text-navy-900 hover:bg-navy-900/[0.04]",
        outlineLight: "border border-neutral-0/30 text-neutral-0 hover:bg-neutral-0/10",
        ghost: "text-navy-900 hover:bg-navy-900/[0.04]",
        link: "text-teal-600 hover:text-teal-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-[3.25rem] px-8 text-[0.95rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({ className, variant, size, href, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

import { cva, type VariantProps } from "class-variance-authority"

import Link, { type LinkProps } from "next/link"
import { twMerge } from "tailwind-merge"

export type ButtonProps = (
  | (React.ComponentPropsWithoutRef<"button"> & { as?: "button" })
  | (LinkProps & { as: "link"; external?: boolean })
) & {
  children?: React.ReactNode
  className?: string
} & VariantProps<typeof buttonStyles>

const buttonStyles = cva(
  "inline-flex h-10 items-center justify-center rounded-none px-4 transition-all font-bold text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        gradient:
          "bg-transparent border-2 text-primary text-xl focus-visible:outline-white active:from-primary/90 active:to-secondary/90 after:inset-0 after:absolute after:w-0 after:top-0 after:left-0 after:h-full hover:after:w-full relative after:bg-gradient-pattern after:transition-all hover:text-base-100 after:-z-10",

        primary: "bg-primary text-white hover:bg-primary/90 focus-visible:outline-primary active:primary/90",
        outline:
          "border-2 border-primary text-primary bg-base-100 hover:bg-primary/90 focus-visible:outline-white hover:text-base-100 active:bg-primary",
        secondary: "bg-secondary text-white hover:bg-secondary/90 focus-visible:outline-secondary active:secondary/90",
        "outline-white":
          "border-white border-2 text-white hover:bg-primary/90 focus-visible:outline-white hover:text-base-100 active:bg-primary",
        white: "border border-gray-400 bg-white hover:bg-gray-100 focus-visible:outline-white active:bg-white",
        danger: "bg-red-500 text-white hover:bg-red-700 focus-visible:outline-red-500 active:red-500/90",
        ghost:
          "bg-transparent text-primary hover:bg-primary/90 hover:text-base-100 focus-visible:outline-primary active:primary/90",
        "danger-outline":
          "border border-red-500 text-red-500 bg-white hover:bg-red-100 focus-visible:outline-white active:bg-white",
        disabled: "bg-neutral-300 text-neutral-500 border-neutral-300",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
)

const Button = ({ children, className, variant = "primary", ...rest }: ButtonProps) => {
  if (rest.as === "link") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, external, ...props } = rest
    return (
      <Link
        {...props}
        href={rest.href}
        className={twMerge(buttonStyles({ variant }), className)}
        rel={external ? "noopener noreferrer" : ""}
        target={external ? "_blank" : ""}
      >
        {children}
      </Link>
    )
  }

  return (
    <button {...rest} className={twMerge(buttonStyles({ variant: rest.disabled ? "disabled" : variant }), className)}>
      {children}
    </button>
  )
}

export default Button

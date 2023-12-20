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
        primary: "bg-primary text-white hover:bg-primary/90 focus-visible:outline-primary active:primary/90",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary/90 focus-visible:outline-white hover:text-base-100 active:bg-primary",
        "outline-white":
          "border-white border-2 text-white hover:bg-primary/90 focus-visible:outline-white hover:text-base-100 active:bg-primary",
        white: "border border-gray-400 bg-white hover:bg-gray-100 focus-visible:outline-white active:bg-white",
        ghost:
          "bg-transparent text-primary hover:bg-primary/90 hover:text-base-100 focus-visible:outline-primary active:primary/90",
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
    const { as: _, external, ...props } = rest
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

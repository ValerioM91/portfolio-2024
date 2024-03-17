import { cva } from "class-variance-authority"

export const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 font-bold transition-[background-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "rounded-none border-2 px-4 py-1.5",
        outline: "rounded-none border-2 px-4 py-1.5",
        ghost: "rounded-none px-4 py-1.5 border-2",
        link: "hover:underline disabled:hover:no-underline",
      },
      colorSchema: {
        primary: "text-primary border-primary hover:bg-primary/90 focus-visible:outline-primary hover:text-white",
        white: "text-white border-white hover:bg-white focus-visible:outline-white hover:text-primary",
      },
      disabled: {
        true: "cursor-not-allowed border-base-100 text-content-neutral bg-base-100 hover:bg-base-100",
      },
      fullWidth: {
        true: "w-full",
      },
      size: {
        sm: "text-sm leading-none",
        md: "text-base",
        lg: "text-lg",
        iconXs: "rounded text-sm w-6 h-6 px-1 py-1",
        iconSm: "rounded text-sm w-7 h-7 px-1 py-1",
        iconMd: "rounded-md text-base w-9 h-9 px-2 py-2",
        iconLg: "text-lg w-12 h-12 px-3 py-3",
      },
      uppercase: {
        true: "uppercase",
      },
    },
    defaultVariants: {
      variant: "outline",
      colorSchema: "primary",
      size: "md",
      fullWidth: false,
      uppercase: false,
      disabled: false,
    },
    compoundVariants: [
      {
        variant: "ghost",
        className: "border-transparent",
      },
      {
        variant: "link",
        className: "bg-transparent hover:bg-transparent",
      },
      {
        variant: "solid",
        colorSchema: "primary",
        disabled: false,
        className: "bg-primary border-primary text-white hover:bg-primary/80 focus-visible:outline-primary",
      },
      {
        variant: "solid",
        colorSchema: "white",
        disabled: false,
        className: "bg-white border-white text-primary hover:bg-white/80 focus-visible:outline-white",
      },
    ],
  },
)

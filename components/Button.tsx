import { type VariantProps } from "class-variance-authority"
import { buttonStyles } from "@/utils/buttonVariants"
import { cn } from "@/utils/cn"

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & VariantProps<typeof buttonStyles>
const Button = ({
  children,
  className,
  variant,
  colorSchema,
  fullWidth,
  uppercase,
  size,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cn(buttonStyles({ variant, colorSchema, fullWidth, uppercase, size, disabled }), className)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

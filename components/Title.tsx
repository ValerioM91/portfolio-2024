import { twMerge } from "tailwind-merge"

type TitleProps = React.ComponentPropsWithoutRef<"h2"> & {
  title: string
}

const Title = ({ title, className, ...rest }: TitleProps) => {
  return (
    <h2 className={twMerge("text-center text-3xl font-bold uppercase sm:text-4xl", className)} {...rest}>
      {title}
    </h2>
  )
}
export default Title

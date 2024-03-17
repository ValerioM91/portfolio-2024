import { cn } from "@/utils/cn"

type ContainerProps = React.ComponentPropsWithoutRef<"div">

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8", className)}>{children}</div>
}
export default Container

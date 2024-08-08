import { Skeleton } from "./ui/skeleton";

export function ProductPlaceholder() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton  className="size-full"/>
      </div>
      <Skeleton  className="mt-4 w-2/4 h-4 rounded-lg"/>
      <Skeleton  className="mt-4 w-16 h-4 rounded-lg"/>
      <Skeleton  className="mt-4 w-12 h-4 rounded-lg"/>
    </div>
  )
}
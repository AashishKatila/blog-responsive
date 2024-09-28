import { Skeleton } from "@/components/skeleton";
import { cn } from "@/lib/utils";
import { ILoader } from "@/utils/types";

export function Loader({ count = 1, skeletonStyle, loaderStyle }: ILoader) {
  return (
    <div className="flex flex-wrap md:m-20 md:gap-20 m-4 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={cn("flex gap-4", loaderStyle)}>
          <Skeleton
            className={cn(
              "h-10 w-44 md:h-[200px] md:w-[350px] rounded-xl",
              skeletonStyle
            )}
          />
          <div className="space-y-4">
            <Skeleton className="h-4 w-20 md:w-[150px]  " />
            <Skeleton className="h-4 w-20 md:w-[150px]" />
            <Skeleton className="h-4 md:h-16 w-24 md:w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

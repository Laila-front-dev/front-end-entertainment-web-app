import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Loading() {
  const array = new Array(24).fill(null);

  return (
    <div className="pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-[80px]">
      {array.map((_, i) => (
        <Skeleton key={i} className="relative">
          <Skeleton className="bg-zinc-700 w-[236.591px] h-[232.955px] rounded-lg object-cover" />
          <Skeleton className="absolute top-0 right-0 mr-4 mt-4 md:mr-6 md:mt-6 w-[32px] h-[32px] bg-[#979797] rounded-[100px] " />

          <div className="pt-3 grid gap-3">
            <Skeleton className=" h-4 w-[76%] bg-[#979797]" />
            <Skeleton className="h-4 w-[80px] bg-[#979797]" />
          </div>
        </Skeleton>
      ))}
    </div>
  );
}

export default Loading;

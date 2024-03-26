import { Skeleton } from "@/components/ui/skeleton";

import React from "react";
import Wrapper from "./Wrapper";

const MySkelton = () => {
  return (
    <div className=" flex flex-col md:flex-row flex-wrap items-center gap-6">
      <Skeleton className="h-[250px] w-[280px] rounded-xl" />

      <Skeleton className="h-[250px] w-[280px] rounded-xl" />

      <Skeleton className="h-[250px] w-[280px] rounded-xl" />

      <Skeleton className="h-[250px] w-[280px] rounded-xl" />

      <Skeleton className="h-[250px] w-[280px] rounded-xl" />

      <Skeleton className="h-[250px] w-[280px] rounded-xl" />

      <Skeleton className="h-[250px] w-[280px] rounded-xl" />

      <Skeleton className="h-[250px] w-[280px] rounded-xl" />
      
    </div>
  );
};

export default MySkelton;

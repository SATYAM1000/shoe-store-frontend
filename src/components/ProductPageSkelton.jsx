import { Skeleton } from "@/components/ui/skeleton";

import React from "react";
import Wrapper from "./Wrapper";

const ProductPageSkelton = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Skeleton className="h-[500px] w-[400px] rounded-xl" />
    </div>
  );
};

export default ProductPageSkelton;

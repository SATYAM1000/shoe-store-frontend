import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Suspense } from "react";
import MySkeleton from "./MySkelton";
import { getDiscountedPricePercentage } from "@/utils/helper";

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105"
    >
      <Image
        src={p.thumbnail.data[0].attributes.url}
        alt="product"
        width={500}
        height={500}
        className="w-full"
      />
      <div className="p-4 text-black/[0.9] ">
        <h2 className="text-md font-medium">{p.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-sm font-semibold">&#8377;{p.price}</p>
          {p.original_price && (
            <>
              <p className="text-base font-medium line-through">
                &#8377;{p.original_price}
              </p>
              <p className="ml-auto text-sm  font-medium text-green-500">
                {getDiscountedPricePercentage(p.original_price, p.price)}% Off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

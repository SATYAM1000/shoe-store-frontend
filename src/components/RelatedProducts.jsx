"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/utils/data";
import ProductCard from "./ProductCard";

const RelatedProducts = ({products}) => {
  
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-xl font-bold mb-5">You Might Also Like</div>
      <Carousel responsive={responsive} containerClass="-mx-[10px]" itemClass="px-[10px]">
       
        {
          products.map((product, key)=>(
            <ProductCard key={key} data={product}/>
          ))
        }


      </Carousel>
      
    </div>
  );
};

export default RelatedProducts;

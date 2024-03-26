"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductPageSkelton from "./ProductPageSkelton";

const ProductDetailsCarousel = ({ images }) => {
  console.log("img ", images);
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      {images === null ? (
        <ProductPageSkelton className="productCarousel" />
      ) : (
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          {images?.map((img) => (
            <img
              key={img.id}
              src={img.attributes.url}
              alt={img.attributes.name}
            />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ProductDetailsCarousel;

"use client";
import React, { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

import { fetchDataFromApi } from "@/utils/api";
import MySkelton from "@/components/MySkelton";
const AllCategoryPage = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data } = await fetchDataFromApi("/api/products?populate=*");
      setIsLoading(false);
      setAllProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="w-full md:py-5">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[20px] md:text-[28px] mb-5 font-semibold">
            All Products
          </div>
        </div>
        {isLoading ? (
          <MySkelton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
            {allProducts &&
              allProducts.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default AllCategoryPage;

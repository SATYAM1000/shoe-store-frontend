"use client";
import React, { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

import { fetchDataFromApi } from "@/utils/api";
import MySkelton from "@/components/MySkelton";

const SingleCategoryPage = ({ params }) => {
  const [allProducts, setAllProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [data, setData] = useState(null);
  const slug = params.slug;
  const maxResult = 6;
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const category = await fetchDataFromApi(
        `/api/categories?filters[slug][$eq]=${slug}`
      );
      const res = await fetchDataFromApi(
        `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${maxResult}`
      );
      setIsLoading(false);
      setAllProducts(res.data);
      setData(res);
      setCategory(category?.data[0].attributes);
    };
    fetchProducts();
  }, [page]);
  return (
    <div className="w-full md:py-5">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[20px] md:text-[28px] mb-5 font-semibold">
            {category && category.name}
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

        {data?.meta?.pagination.total > maxResult && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
              className={`rounded text-xs py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>

            <span className="font-bold text-xs">{`${page} of ${
              data && data.meta.pagination.pageCount
            }`}</span>

            <button
              className={`rounded text-xs py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={page === (data && data.meta.pagination.pageCount)}
              onClick={() => setPage(page + 1)} // Corrected function call
            >
              Next
            </button>
          </div>
        )}
        {/* PAGINATION BUTTONS END */}
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
            <img src="/assets/logo.svg" width={150} />
            <span className="text-2xl font-medium">Loading...</span>
          </div>
        )}
        
      
      </Wrapper>
    </div>
  );
};

export default SingleCategoryPage;

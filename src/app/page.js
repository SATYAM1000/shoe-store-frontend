"use client"
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "@/utils/api";
import MySkeleton from "@/components/MySkelton";

export default function Home() {
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
    <main className="w-full">
      <HeroBanner />
      <Wrapper>
        {/* heading and para---------------- */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div>
            Experience the difference with our advanced cushioning technology
            designed to enhance your every step.
          </div>
        </div>

        {/* ----------products collection-------------- */}
        {isLoading ? (
          <MySkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
            {allProducts &&
              allProducts.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
          </div>
        )}

        
      </Wrapper>
    </main>
  );
}

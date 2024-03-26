"use client";
import React, { useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { addToWishlist } from "@/store/wishListSlice";
import { useToast } from "@/components/ui/use-toast";

const SingleProductPage = ({ params }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const [allProducts, setAllProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [data, setData] = useState(null);
  const [images, setImages] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const slug = params.slug;
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const [alreadyPresent, setAlreadyPresent] = useState(false);

  useEffect(() => {
    const isItemAlreadyInWishlist = () => {
      return wishlistItems.some((item) => item.slug === product?.slug);
    };

    setAlreadyPresent(isItemAlreadyInWishlist());
  }, [wishlistItems, product]);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const newProduct = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
      );
      const similarProducts = await fetchDataFromApi(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}`
      );
      setIsLoading(false);
      setAllProducts(similarProducts?.data);
      setImages(newProduct.data[0].attributes.image.data);
      setProduct(newProduct.data[0].attributes);
    };
    fetchProducts();
  }, []);
  const handleAddToWishList = () => {
    dispatch(
      addToWishlist({
        ...product,
        selectedSize,
        oneQunatityPrice: product?.price,
      })
    );
    toast({
      description: "Product added to wishlist! ❤️",
    });
  };
  const handleAlreadyAddToWishList=()=>{
    toast({
      description: "Product already added to wishlist! ❤️",
    });
  }
  const handleAddToCart = () => {
    setError("");
    setSuccess("");
    if (selectedSize === null) {
      setError("Size selection is required");
      return;
    }
    dispatch(
      addToCart({
        ...product,
        selectedSize,
        oneQunatityPrice: product?.price,
      })
    );
    toast({
      description: "✅ Product added to cart successfully!",
    });
  };
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* ---------left side---------- */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={images} />
          </div>

          {/* --------right-side---------- */}

          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">
              {product?.name}
            </div>
            <div className="text-lg font-semibold mb-5">
              {product?.subtitle}
            </div>

            <div className="text-lg font-semibold">₹ {product?.price}</div>
            <div className="text-sm font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-sm font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            {/* --------size range------------ */}

            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {product?.size.data.map((s, key) => {
                  if (s.size === selectedSize && s.enabled === true) {
                    return (
                      <div
                        key={key}
                        className="border rounded-md text-center py-3 font-medium border-emerald-500 cursor-pointer bg-emerald-500/[0.1]"
                      >
                        {s.size}
                      </div>
                    );
                  } else if (s.enabled) {
                    return (
                      <div
                        key={key}
                        className="border rounded-md text-center py-3 font-medium hover:border-emerald-500 cursor-pointer hover:bg-emerald-500/[0.1]"
                        onClick={() => setSelectedSize(s.size)}
                      >
                        {s.size}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={key}
                        className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50"
                      >
                        {s.size}
                      </div>
                    );
                  }
                })}
              </div>
              {error && (
                <div className="text-red-500 mt-2 text-sm">{error}</div>
              )}
              {success && (
                <div className="text-emerald-500 mt-2 text-sm">{success}</div>
              )}
            </div>

            {/* --------product size range end------ */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            {alreadyPresent ? (
              <button
                onClick={handleAlreadyAddToWishList}
                className="w-full py-4 bg-red-600/[0.2] rounded-full border text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
              >
                Wishlist
                <IoMdHeartEmpty size={20} />
              </button>
            ) : (
              <>
                <button
                  onClick={handleAddToWishList}
                  className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
                >
                  Wishlist
                  <IoMdHeartEmpty size={20} />
                </button>
              </>
            )}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              {product?.description.map((para, key) => (
                <div key={key} className="text-sm text-black/[0.8] mb-5">
                  {para?.children[0].text}
                </div>
              ))}
            </div>
          </div>
        </div>
        {allProducts && <RelatedProducts products={allProducts} />}
      </Wrapper>
    </div>
  );
};

export default SingleProductPage;

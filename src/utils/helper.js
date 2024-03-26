export const getDiscountedPricePercentage=(originalPrice, actualPrice)=>{
    const discount=originalPrice-actualPrice;
    const discountPercentage=(discount/originalPrice)*100;
    return discountPercentage.toFixed(2);
}
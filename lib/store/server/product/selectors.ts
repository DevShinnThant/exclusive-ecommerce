import { ProductResponse } from "./types";

export const ProductSelector = (data: ProductResponse[]) => {
  return data.map((item) => {
    const itemAttributes = item.attributes;
    return {
      id: item.id,
      name: itemAttributes.name,
      price: itemAttributes.price || 0,
      dis_price: itemAttributes.dis_price,
      rating: itemAttributes.rating,
      variant: itemAttributes.variant,
      voting: itemAttributes.voting,
      image: itemAttributes?.images?.data?.[0]?.attributes?.url || "",
    };
  });
};

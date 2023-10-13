export interface ProductResponse {
  id: number;
  attributes: {
    name: string;
    price: number;
    dis_price: number;
    rating: number;
    variant: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    voting: number;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null;
          caption: null;
          width: number;
          height: number;
          formats: null;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: null;
          provider: string;
          provider_metadata: null;
          createdAt: Date;
          updatedAt: Date;
        };
      }[];
    };
  };
}

export interface Product {
  id: number;
  name: string;
  price: number;
  dis_price: number;
  rating: number;
  variant: string;
  voting: number;
  image: string;
}

export interface ProductQuery {
  filters?: {
    slug: {
      name: string;
      value: string;
    };
    deep?: {
      columnName: string;
    };
  };
  pagination?: {
    page?: number;
    pageSize?: number;
    limit?: number;
  };
}

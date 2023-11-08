export interface ProductResponse {
  id: number;
  attributes: {
    name: string;
    price: number | null;
    dis_price: number;
    rating: number;
    variant: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    voting: number;
    desciption: null | string;
    category: {
      data: {
        id: number;
        attributes: {
          Name: string;
          createdAt: Date;
          updatedAt: Date;
          publishedAt: Date;
        };
      };
    };
    images: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null;
          caption: null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: ".svg" | ".jpeg";
              mime: "image/svg+xml" | "image/jpeg";
              path: null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: ".svg" | ".jpeg";
              mime: "image/svg+xml" | "image/jpeg";
              path: null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            medium?: {
              name: string;
              hash: string;
              ext: ".svg" | ".jpeg";
              mime: "image/svg+xml" | "image/jpeg";
              path: null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
          } | null;
          hash: string;
          ext: ".svg" | ".jpeg";
          mime: "image/svg+xml" | "image/jpeg";
          size: number;
          url: string;
          previewUrl: null;
          provider: "local";
          provider_metadata: null;
          createdAt: Date;
          updatedAt: Date;
        };
      }[];
    };
    colors: {
      data: {
        id: number;
        attributes: {
          Name?: string;
          createdAt: Date;
          updatedAt: Date;
          publishedAt: Date;
          name?: string;
        };
      }[];
    };
    sizes: {
      data: {
        id: number;
        attributes: {
          Name?: string;
          createdAt: Date;
          updatedAt: Date;
          publishedAt: Date;
          name?: string;
        };
      }[];
    };
  };
}

export interface ProductImageResponse {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: null;
      caption: null;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          name: string;
          hash: string;
          ext: ".svg" | ".jpeg";
          mime: "image/svg+xml" | "image/jpeg";
          path: null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        small: {
          name: string;
          hash: string;
          ext: ".svg" | ".jpeg";
          mime: "image/svg+xml" | "image/jpeg";
          path: null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        medium?: {
          name: string;
          hash: string;
          ext: ".svg" | ".jpeg";
          mime: "image/svg+xml" | "image/jpeg";
          path: null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
      } | null;
      hash: string;
      ext: ".svg" | ".jpeg";
      mime: "image/svg+xml" | "image/jpeg";
      size: number;
      url: string;
      previewUrl: null;
      provider: "local";
      provider_metadata: null;
      createdAt: Date;
      updatedAt: Date;
    };
  }[];
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
    property?: string;
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

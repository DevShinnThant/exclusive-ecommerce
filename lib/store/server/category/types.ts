export interface CategoryResponse {
  id: number;
  attributes: {
    Name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}

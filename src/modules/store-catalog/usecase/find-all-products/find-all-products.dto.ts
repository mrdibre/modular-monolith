export interface FindAllProductsOutputDTO {
  products: {
    id: string;
    name: string;
    description: string;
    salesPrice: number;
  }[];
}

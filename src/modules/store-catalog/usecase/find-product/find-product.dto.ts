export interface FindProductInputDTO {
  productId: string;
}

export interface FindProductOutputDTO {
  id: string;
  name: string;
  description: string;
  salesPrice: number;
}

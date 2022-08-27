export interface AddProductInputDTO {
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

export interface AddProductOutputDTO {
  id: string;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

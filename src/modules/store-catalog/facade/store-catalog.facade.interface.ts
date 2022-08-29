export interface FindStoreCatalogFacadeInputDTO {
  productId: string;
}

export interface FindStoreCatalogFacadeOutputDTO {
  id: string;
  name: string;
  description: string;
  salesPrice: number;
}

export interface FindAllStoreCatalogFacadeOutputDTO {
  products: {
    id: string;
    name: string;
    description: string;
    salesPrice: number;
  }[];
}

export interface StoreCatalogFacadeInterface {
  find(props: FindStoreCatalogFacadeInputDTO): Promise<FindStoreCatalogFacadeOutputDTO>;
  findAll(): Promise<FindAllStoreCatalogFacadeOutputDTO>;
}

import { ProductGateway } from "../../gateway/product.gateway";
import { UseCaseInterface } from "../../../@shared/usecase/usecase.interface";
import { FindAllProductsOutputDTO } from "./find-all-products.dto";

export class FindAllProductsUseCase implements UseCaseInterface {
  constructor(private readonly gateway: ProductGateway) {}

  async execute(): Promise<FindAllProductsOutputDTO> {
    const products = await this.gateway.findAll();

    return {
      products: products.map(product => ({
        id: product.id.id,
        name: product.name,
        salesPrice: product.salesPrice,
        description: product.description,
      }))
    };
  }
}

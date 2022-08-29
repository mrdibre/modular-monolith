import { UseCaseInterface } from "../../../@shared/usecase/usecase.interface";
import { ProductGateway } from "../../gateway/product.gateway";
import { FindProductInputDTO, FindProductOutputDTO } from "./find-product.dto";

export class FindProductUseCase implements UseCaseInterface {
  constructor(private readonly gateway: ProductGateway) {}

  async execute(input: FindProductInputDTO): Promise<FindProductOutputDTO> {
    const product = await this.gateway.find(input.productId);

    return {
      id: product.id.id,
      name: product.name,
      salesPrice: product.salesPrice,
      description: product.description,
    };
  }
}

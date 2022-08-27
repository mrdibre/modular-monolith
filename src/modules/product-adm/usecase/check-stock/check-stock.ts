import { UseCaseInterface } from "../../../@shared/usecase/usecase.interface";
import { CheckStockInputDTO, CheckStockOutputDTO } from "./check-stock.dto";
import { ProductGateway } from "../../gateway/product.gateway";

export class CheckStockUseCase implements UseCaseInterface {
  constructor(private readonly repository: ProductGateway) {}

  async execute(input: CheckStockInputDTO): Promise<CheckStockOutputDTO> {
    const product = await this.repository.find(input.productId);

    return {
      stock: product.stock,
      productId: product.id.id,
    };
  }
}

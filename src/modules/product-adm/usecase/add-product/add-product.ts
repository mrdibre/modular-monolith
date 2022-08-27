import { AddProductInputDTO, AddProductOutputDTO } from "./add-product.dto";
import { Product } from "../../domain/product.entity";
import { Id } from "../../../@shared/domain/value-object/id.value-object";
import { ProductGateway } from "../../gateway/product.gateway";
import { UseCaseInterface } from "../../../@shared/usecase/usecase.interface";

export class AddProductUseCase implements UseCaseInterface {
  constructor(private readonly productGateway: ProductGateway) {}

  async execute(input: AddProductInputDTO): Promise<AddProductOutputDTO> {
    const product = new Product({
      id: new Id(input.id),
      name: input.name,
      stock: input.stock,
      description: input.description,
      purchasePrice: input.purchasePrice,
      createdAt: new Date(),
    });

    await this.productGateway.add(product);

    return {
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    }
  }
}

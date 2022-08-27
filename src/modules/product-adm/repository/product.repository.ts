import { ProductGateway } from "../gateway/product.gateway";
import { Product } from "../domain/product.entity";
import { ProductModel } from "./product.model";

export class ProductRepository implements ProductGateway {
  async add(product: Product): Promise<void> {
    await ProductModel.create({
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    })
  }

  async find(id: string): Promise<Product> {
    return Promise.resolve(undefined);
  }
}

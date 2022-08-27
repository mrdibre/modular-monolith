import { ProductGateway } from "../gateway/product.gateway";
import { Product } from "../domain/product.entity";
import { ProductModel } from "./product.model";
import { Id } from "../../@shared/domain/value-object/id.value-object";

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
    const productDb = await ProductModel.findByPk(id);

    if (!productDb) {
      throw new Error(`Product with id ${id} not found`);
    }

    return new Product({
      id: new Id(productDb.id),
      name: productDb.name,
      stock: productDb.stock,
      description: productDb.description,
      purchasePrice: productDb.purchasePrice,
      createdAt: productDb.createdAt,
      updatedAt: productDb.updatedAt,
    })
  }
}

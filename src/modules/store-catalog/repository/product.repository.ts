import { ProductModel } from "./product.model";
import { Product } from "../domain/product.entity";
import { ProductGateway } from "../gateway/product.gateway";
import { Id } from "../../@shared/domain/value-object/id.value-object";

export class ProductRepository implements ProductGateway {
  async findAll(): Promise<Product[]> {
    const products = await ProductModel.findAll();

    return products.map(product => {
      return new Product({
        name: product.name,
        id: new Id(product.id),
        salesPrice: product.salesPrice,
        description: product.description,
      });
    });
  }

  async find(id: string): Promise<Product> {
    const product = await ProductModel.findByPk(id);

    return new Product({
      id: new Id(product.id),
      name: product.name,
      salesPrice: product.salesPrice,
      description: product.description,
    });
  }
}

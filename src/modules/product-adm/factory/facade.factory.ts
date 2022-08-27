import { ProductRepository } from "../repository/product.repository";
import { AddProductUseCase } from "../usecase/add-product/add-product";
import { ProductAdmFacade } from "../facade/product-adm-facade";

export class ProductAdmFacadeFactory {
  static create() {
    const repository = new ProductRepository();
    const addProductUseCase = new AddProductUseCase(repository);

    return new ProductAdmFacade(addProductUseCase, undefined);
  }
}

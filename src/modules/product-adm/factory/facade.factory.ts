import { ProductRepository } from "../repository/product.repository";
import { AddProductUseCase } from "../usecase/add-product/add-product";
import { ProductAdmFacade } from "../facade/product-adm-facade";
import { CheckStockUseCase } from "../usecase/check-stock/check-stock";

export class ProductAdmFacadeFactory {
  static create() {
    const repository = new ProductRepository();
    const addProductUseCase = new AddProductUseCase(repository);
    const checkStockUseCase = new CheckStockUseCase(repository);

    return new ProductAdmFacade(addProductUseCase, checkStockUseCase);
  }
}

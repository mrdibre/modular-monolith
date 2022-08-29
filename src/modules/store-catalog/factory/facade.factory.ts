import { ProductRepository } from "../repository/product.repository";
import { FindProductUseCase } from "../usecase/find-product/find-product.usecase";
import { FindAllProductsUseCase } from "../usecase/find-all-products/find-all-products.usecase";
import { StoreCatalogFacade } from "../facade/store-catalog.facade";

export class FacadeFactory {
  static create() {
    const repository = new ProductRepository();
    const findUseCase = new FindProductUseCase(repository);
    const findAllUseCase = new FindAllProductsUseCase(repository);

    return new StoreCatalogFacade(findUseCase, findAllUseCase);
  }
}

import {
  AddProductFacadeInputDTO,
  CheckStockFacadeInputDTO,
  CheckStockFacadeOutputDTO,
  ProductAdmFacadeInterface
} from "./product-adm-facade.interface";
import { UseCaseInterface } from "../../@shared/usecase/usecase.interface";

export class ProductAdmFacade implements ProductAdmFacadeInterface {
  constructor(private readonly addProductUseCase: UseCaseInterface, private readonly checkStockUseCase: UseCaseInterface) {}

  addProduct(input: AddProductFacadeInputDTO): Promise<void> {
    return this.addProductUseCase.execute(input);
  }

  checkStock(input: CheckStockFacadeInputDTO): Promise<CheckStockFacadeOutputDTO> {
    return this.checkStockUseCase.execute(input);
  }
}

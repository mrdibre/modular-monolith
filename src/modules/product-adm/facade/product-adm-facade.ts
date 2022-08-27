import {
  AddProductFacadeInputDTO,
  CheckStockFacadeInputDTO,
  CheckStockFacadeOutputDTO,
  ProductAdmFacadeInterface
} from "./product-adm-facade.interface";
import { UseCaseInterface } from "../../@shared/usecase/usecase.interface";

export class ProductAdmFacade implements ProductAdmFacadeInterface {
  constructor(private readonly addProductUseCase: UseCaseInterface, private readonly checkStockUseCase: UseCaseInterface) {}

  async addProduct(input: AddProductFacadeInputDTO): Promise<void> {
    await this.addProductUseCase.execute(input);
  }

  async checkStock(input: CheckStockFacadeInputDTO): Promise<CheckStockFacadeOutputDTO> {
    return this.checkStockUseCase.execute(input);
  }
}

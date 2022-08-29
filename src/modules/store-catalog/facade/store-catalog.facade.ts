import {
  FindAllStoreCatalogFacadeOutputDTO,
  FindStoreCatalogFacadeInputDTO,
  FindStoreCatalogFacadeOutputDTO,
  StoreCatalogFacadeInterface
} from "./store-catalog.facade.interface";
import { UseCaseInterface } from "../../@shared/usecase/usecase.interface";

export class StoreCatalogFacade implements StoreCatalogFacadeInterface {
  constructor(private readonly findProductUseCase: UseCaseInterface, private readonly findAllProductsUseCase: UseCaseInterface) {
  }

  async find(props: FindStoreCatalogFacadeInputDTO): Promise<FindStoreCatalogFacadeOutputDTO> {
    return this.findProductUseCase.execute(props);
  }

  async findAll(): Promise<FindAllStoreCatalogFacadeOutputDTO> {
    return this.findAllProductsUseCase.execute(undefined);
  }
}

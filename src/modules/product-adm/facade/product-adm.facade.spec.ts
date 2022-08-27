import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "../repository/product.model";
import { ProductRepository } from "../repository/product.repository";
import { AddProductUseCase } from "../usecase/add-product/add-product";
import { ProductAdmFacade } from "./product-adm-facade";
import { ProductAdmFacadeFactory } from "../factory/facade.factory";

describe("Product Adm Facade Test", function () {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true }
    });

    await sequelize.addModels([ProductModel])
    await sequelize.sync()
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("Should create a product", async () => {
    const facade = ProductAdmFacadeFactory.create();

    const input = {
      id: "1",
      name: "Product 1",
      description: "Product 1 description",
      purchasePrice: 10,
      stock: 10,
    };

    await facade.addProduct(input);

    const product = await ProductModel.findByPk(input.id);

    expect(product).toBeTruthy();
    expect(product.id).toBe(input.id);
    expect(product.name).toBe(input.name);
    expect(product.description).toBe(input.description);
    expect(product.purchasePrice).toBe(input.purchasePrice);
    expect(product.stock).toBe(input.stock);
  })
});

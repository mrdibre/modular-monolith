import { Sequelize } from "sequelize-typescript";

import { ProductModel } from "./product.model";
import { ProductRepository } from "./product.repository";
import { Product } from "../domain/product.entity";
import { Id } from "../../@shared/domain/value-object/id.value-object";

describe("ProductRepository test", () => {
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
    const productProps = {
      id: new Id("1"),
      name: "Product 1",
      description: "Product 1 description",
      purchasePrice: 100,
      stock: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const product = new Product(productProps);
    const repository = new ProductRepository();

    await repository.add(product);

    const productDb = await ProductModel.findByPk(productProps.id.id);

    expect(productProps.id.id).toEqual(productDb.id);
    expect(productProps.name).toEqual(productDb.name);
    expect(productProps.stock).toEqual(productDb.stock);
    expect(productProps.description).toEqual(productDb.description);
    expect(productProps.purchasePrice).toEqual(productDb.purchasePrice);
  })
})

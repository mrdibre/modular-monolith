import { Product } from "../../domain/product.entity";
import { Id } from "../../../@shared/domain/value-object/id.value-object";
import { FindAllProductsUseCase } from "./find-all-products.usecase";

const product = new Product({
  id: new Id("1"),
  name: "Product 1",
  description: "Description 1",
  salesPrice: 100,
})

const product2 = new Product({
  id: new Id("2"),
  name: "Product 2",
  description: "Description 2",
  salesPrice: 200,
});

const MockRepository = () => ({
  find: jest.fn(),
  findAll: jest.fn().mockResolvedValue([product, product2]),
})

describe("Find all products usecase unit test", () => {
  it("Should find all products", async () => {
    const repository = MockRepository();

    const usecase = new FindAllProductsUseCase(repository);

    const result = await usecase.execute();

    expect(repository.findAll).toHaveBeenCalled();
    expect(result.products.length).toBe(2);

    expect(result.products[0].id).toBe("1");
    expect(result.products[0].name).toBe("Product 1");
    expect(result.products[0].description).toBe("Description 1");
    expect(result.products[0].salesPrice).toBe(100);

    expect(result.products[1].id).toBe("2");
    expect(result.products[1].name).toBe("Product 2");
    expect(result.products[1].description).toBe("Description 2");
    expect(result.products[1].salesPrice).toBe(200);
  })
})

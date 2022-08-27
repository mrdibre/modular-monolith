import { AddProductUseCase } from "./add-product";
import { AddProductInputDTO } from "./add-product.dto";

const MockRepository = () => ({
  add: jest.fn(),
  find: jest.fn(),
})

describe("Add Product UseCase Unit Test", () => {
  it("Should add a product", async () => {
    const repository = MockRepository();

    const usecase = new AddProductUseCase(repository);

    const input: AddProductInputDTO = {
      name: "Product 1",
      description: "Product 1 description",
      purchasePrice: 100,
      stock: 10,
    }

    const output = await usecase.execute(input)

    expect(repository.add).toHaveBeenCalled();
    expect(output.id).toBeDefined();
    expect(output.name).toBe(input.name);
    expect(output.description).toBe(input.description);
    expect(output.purchasePrice).toBe(input.purchasePrice);
    expect(output.stock).toBe(input.stock);
  });
});

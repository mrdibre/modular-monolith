import { CheckStockUseCase } from "./check-stock";
import { Id } from "../../../@shared/domain/value-object/id.value-object";

const MockRepository = () => ({
  add: jest.fn(),
  find: jest.fn().mockResolvedValue({
    id: new Id("1"),
    stock: 10,
  }),
})

describe("Check Stock UseCase Unit Test", () => {
  it("Should get stock from one product", async () => {
    const repository = MockRepository();

    const usecase = new CheckStockUseCase(repository);

    const output = await usecase.execute({ productId: "1" })

    expect(repository.find).toHaveBeenCalled();
    expect(output.productId).toBe("1");
    expect(output.stock).toBe(10);
  });
});

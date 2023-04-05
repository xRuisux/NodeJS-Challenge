import { Products } from './schemas/products';

describe('Products', () => {
  it('should be defined', () => {
    expect(new Products()).toBeDefined();
  });
});

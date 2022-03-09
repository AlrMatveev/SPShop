import { brands as defaultBrands } from "../../fixtures";

export default (brands = defaultBrands, action) => {
  const { type } = action;

  switch (type) {
    default:
      return brands;
  }
};

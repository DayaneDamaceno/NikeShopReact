import create from "zustand";
import { devtools } from "zustand/middleware";
import { IProduct } from "../../models/IProduct";
import { getAllProducts } from "../ProductService";

interface IProductState {
  products: IProduct[];
  loadProducts: () => void;
}

export const useProductStore = create<IProductState>()(
  devtools((set) => ({
    products: [],
    loadProducts: async () => {
      const products = await getAllProducts();

      set((state) => {
        return { products: products };
      });
    },
  }))
);

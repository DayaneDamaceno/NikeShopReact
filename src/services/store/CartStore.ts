import create from "zustand";
import { devtools } from "zustand/middleware";
import { IProduct } from "../../models/IProduct";
import { IProductCart } from "../../models/IProductCart";

interface ICartState {
  cart: IProductCart[];
  addNewItemInCart: (product: IProduct) => void;
  updateAmount: (id: number, amount: number) => void;
  removeItemInCart: (id: number) => void;
}

export const useCartStore = create<ICartState>()(
  devtools((set) => ({
    cart: [],

    addNewItemInCart: (product: IProduct) =>
      set((state) => {
        const itemExist = state.cart.find((item) => item.Id == product.Id);
        if (itemExist) {
          state.updateAmount(product.Id, itemExist.Amount + 1);
          return { state };
        }
        const newItem: IProductCart = {
          ...product,
          Amount: 1,
          UnitPrice: product.Price,
          TotalPrice: product.Price,
        };
        return { cart: [...state.cart, newItem] };
      }),

    removeItemInCart: (id: number) =>
      set((state) => {
        let items = state.cart.filter((item) => item.Id != id);

        return {
          cart: items,
        };
      }),

    updateAmount: (id: number, amount: number) =>
      set((state) => {
        if (amount == 0) {
          state.removeItemInCart(id);
          return { state };
        }
        let items = state.cart.map((item) => {
          if (item.Id == id) {
            const itemAtualizado: IProductCart = {
              ...item,
              Amount: amount,
              TotalPrice: item.UnitPrice * amount,
            };

            return itemAtualizado;
          }

          return item;
        });
        return {
          cart: items,
        };
      }),
  }))
);

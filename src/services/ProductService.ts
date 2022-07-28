import { IProduct } from "../models/IProduct";
import { api } from "./api";

export const getAllProducts = async () => {
  const response = await api.get<IProduct[]>("product");
  return response.data;
};

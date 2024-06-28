import {TableColumns} from "../../components/Table/Table";
import {CartItem} from "./types";

export const COLUMNS: TableColumns<CartItem> = {
  number: {header: "#"},
  title: {header: "Название"},
  size: {header: "Размер"},
  quantity: {header: "Кол-во"},
  price: {header: "Стоимость"},
  total: {header: "Итого"},
  actions: {header: "Действия"},
};

import { Icategories } from "../../pages/menu/categories.type";

export interface IproductTabs {
  currentCategory: Icategories,
  setCurrentCategory: React.Dispatch<React.SetStateAction<Icategories>>
}
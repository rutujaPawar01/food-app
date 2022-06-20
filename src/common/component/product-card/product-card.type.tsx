import { IfoodItems } from "../../../pages/menu/food-items.type";
import { Iinfocard } from "../info-card/info-card.type";

export interface Iproductcard extends Iinfocard {
    food: IfoodItems
}
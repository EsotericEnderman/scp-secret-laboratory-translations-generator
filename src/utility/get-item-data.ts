import { itemData } from "../data/item-data.js";
import { Item, ItemDataFile } from "../types";

const typedItemData = itemData as ItemDataFile;

export function getItemData(itemName: Item) {
    return typedItemData[itemName];
}

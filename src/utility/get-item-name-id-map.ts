import { readFileSync } from "fs";
import { itemsFilePath, newLineCharacter, splitCharacter, translationsFolderPath } from "../constants.js";
import { Item } from "../types.js";

export function getItemNameIdMap(): Map<number, Item> {
    const itemsFileFullPath = translationsFolderPath + "/en/" + itemsFilePath;

    const fileContents = readFileSync(itemsFileFullPath).toString();

    const itemIdMap = new Map<number, Item>();

    for (const line of fileContents.split(newLineCharacter)) {
        const split = line.split(splitCharacter);

        const itemIdString = split[0];
        const itemName = split[1] as Item;

        itemIdMap.set(parseInt(itemIdString), itemName);
    }

    return itemIdMap;
}
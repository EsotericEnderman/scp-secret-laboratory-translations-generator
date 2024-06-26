import { readFileSync } from "fs";
import { itemsFilePath, translationsFolderPath } from "../constants.js";

export function getItemNameIdMap() {
    const itemsFileFullPath = translationsFolderPath + "/en/" + itemsFilePath;

    const fileContents = readFileSync(itemsFileFullPath).toString();

    const itemIdMap = new Map<number, string>();

    for (const line of fileContents.split(/\r\n/)) {
        const split = line.split("~");

        const itemIdString = split[0];
        const itemName = split[1];

        itemIdMap.set(parseInt(itemIdString), itemName);
    }

    return itemIdMap;
}
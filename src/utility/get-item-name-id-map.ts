import { readFileSync } from "fs";
import { translationsFolderPath } from "../constants";

export function getItemNameIdMap() {
    const itemsFilePath = translationsFolderPath + "/en/Items.txt";

    const fileContents = readFileSync(itemsFilePath).toString();

    const itemIdMap = new Map<number, string>();

    for (const line of fileContents.split(/\r\n/)) {
        const split = line.split("~");

        const itemIdString = split[0];
        const itemName = split[1];

        itemIdMap.set(parseInt(itemIdString), itemName);
    }

    return itemIdMap;
}
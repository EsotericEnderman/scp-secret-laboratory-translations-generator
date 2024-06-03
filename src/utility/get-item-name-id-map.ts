import { readFileSync } from "fs";
import { translationsFolderPath } from "../constants";

export function getItemNameIdMap() {
    const itemsFilePath = translationsFolderPath + "/en/Items.txt";

    const fileContents = readFileSync(itemsFilePath).toString();

    const itemIdMap = new Map<number, string>();

    for (const line of fileContents.split(/\r\n/)) {
        const itemIdString = line.match(/\d+/)[0];

        const itemText = line.slice(itemIdString.length + 1);

        const itemName = (itemText.match(/.+(?=~)/))?.[0] ?? itemText;
        // const itemDescription = (itemText === itemName) ? null : itemText.match(/(?<=~).+/)?.[0];

        itemIdMap.set(parseInt(itemIdString), itemName);
    }

    return itemIdMap;
}
import { readFileSync } from "fs";
import { itemsFilePath, newLineCharacter, splitCharacter, translationsFolderPath } from "../constants.js";
import { getItemNameIdMap } from "./get-item-name-id-map.js";
import { invertMap } from "./invert-map.js";

export function getItemTranslation(itemName: string, languageFolderName: string) {
    const itemsFile = readFileSync(translationsFolderPath + "/" + languageFolderName + itemsFilePath).toString();

    const map = getItemNameIdMap();
    const invertedMap = invertMap(map);

    for (const line of itemsFile.split(newLineCharacter)) {
        const split = line.split(splitCharacter);

        const id = parseInt(split[0]);

        const itemId = invertedMap.get(itemName);

        if (id === itemId) {
            return split[1];
        }
    }

    return itemName;
}
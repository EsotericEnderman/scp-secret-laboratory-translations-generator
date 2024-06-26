import { readFileSync, writeFileSync } from "fs";
import { loopTranslationLanguages } from "./loop-translation-languages.js";
import { getItemNameIdMap } from "./get-item-name-id-map.js";
import { recipeToString } from "./recipe-to-string.js";
import { itemsFilePath, newLineCharacter } from "../constants.js";

export function updateItemTranslations() {
    loopTranslationLanguages((folderPath) => {
        const split = folderPath.split("/");
        const languageFolderName = split[split.length - 1];

        const itemsFileFullPath = folderPath + itemsFilePath;

        const itemsFile = readFileSync(itemsFileFullPath).toString();

        const map = getItemNameIdMap();

        const lines = itemsFile.split(newLineCharacter);

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            const itemId = line.match(/\d+/)[0];
            let itemName = map.get(parseInt(itemId));

            const string = recipeToString(itemName, languageFolderName);

            if (string) {
                lines[i] += string;
            }
        }

        writeFileSync(itemsFileFullPath, lines.join(newLineCharacter));
    })
}
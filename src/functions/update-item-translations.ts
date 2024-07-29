import { readFileSync, writeFileSync } from "fs";
import { loopTranslationLanguages } from "./loop-translation-languages.js";
import { getItemNameIdMap } from "../utility/get-item-name-id-map.js";
import { recipeToString } from "../utility/recipe-to-string.js";
import { colon, itemsFilePath, newLineCharacter, slash, translationsFolderPath } from "../constants.js";

export function updateItemTranslations() {
    loopTranslationLanguages((folderPath) => {
        const split = folderPath.split("/");
        const languageFolderName = split[split.length - 1];

        const itemsFileFullPath = folderPath + itemsFilePath;

        const itemsFile = readFileSync(itemsFileFullPath).toString();

        const map = getItemNameIdMap();

        const lines = itemsFile.split(newLineCharacter);

        for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
            let line = lines[lineNumber];

            const itemId = line.match(/\d+/)?.[0];

            if (!itemId) {
                console.log("Line without item ID found:");
                console.log(line);
                console.log("folderPath = " + folderPath);
                console.log("languageFolderName = " + languageFolderName);
                console.log("Location: " + "\"" + translationsFolderPath + slash + languageFolderName + itemsFilePath + colon + lineNumber + colon + "0" + "\"");
                continue;
            }

            let itemName = map.get(parseInt(itemId));

            const string = recipeToString(itemName, languageFolderName);

            if (string) {
                lines[lineNumber] += string;
            }
        }

        writeFileSync(itemsFileFullPath, lines.join(newLineCharacter));
    })
}
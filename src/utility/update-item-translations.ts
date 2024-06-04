import { readFileSync, writeFileSync } from "fs";
import { loopTranslationLanguages } from "./loop-translation-languages";
import { getItemNameIdMap } from "./get-item-name-id-map";
import scp914Recipes from "../../data/scp-914-recipes.json";
import { recipeToString } from "./recipe-to-string";

export function updateItemTranslations() {
    loopTranslationLanguages((folderPath) => {
        const itemsFilePath = folderPath + "/Items.txt";

        const itemsFile = readFileSync(itemsFilePath).toString();

        const map = getItemNameIdMap();

        const lines = itemsFile.split(/\r\n/);

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            const itemId = line.match(/\d+/)[0];
            let itemName = map.get(parseInt(itemId));

            const string = recipeToString(itemName);

            if (string) {
                lines[i] += recipeToString(itemName);
            }
        }

        writeFileSync(itemsFilePath, lines.join("\r\n"));
    })
}
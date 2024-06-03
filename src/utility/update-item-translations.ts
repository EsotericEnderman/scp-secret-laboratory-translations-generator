import { readFileSync, writeFileSync } from "fs";
import { loopTranslationLanguages } from "./loop-translation-languages";
import { getItemNameIdMap } from "./get-item-name-id-map";
import scp914Recipes from "../../data/scp-914-recipes.json";

export function updateItemTranslations() {
    loopTranslationLanguages((folderPath) => {
        const itemsFilePath = folderPath + "/Items.txt";

        const itemsFile = readFileSync(itemsFilePath).toString();

        const map = getItemNameIdMap();

        const lines = itemsFile.split(/\r\n/);

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            const itemId = line.match(/\d+/)[0];

            const itemName = map.get(parseInt(itemId));

            const recipes = scp914Recipes[itemName];

            if (!recipes) {
                continue;
            }

            const roughRecipe = recipes.Rough;
            const coarseRecipe = recipes.Coarse;
            const oneToOneRecipe = recipes["1:1"];
            const fineRecipe = recipes.Fine;
            const veryFineRecipe = recipes["Very Fine"];

            for (const recipe in recipes) {
                let recipeOutput = recipes[recipe];

                if (typeof recipeOutput === "object") {
                    if (typeof recipeOutput.Action === "string") {
                        recipeOutput = recipeOutput.Action;
                    }
                }

                if (Array.isArray(recipeOutput)) {
                    let newRecipeOutput = "";
                    
                    for (const output of recipeOutput) {
                        newRecipeOutput += (output.Item ?? output.Action) + " (" + Math.round(output.Chance * 100) + "%) ";
                    }

                    recipeOutput = newRecipeOutput.trimEnd();
                }

                line += "~" + recipe + " - " + recipeOutput;
            }

            lines[i] = line;
        }

        writeFileSync(itemsFilePath, lines.join("\r\n"));
    })
}
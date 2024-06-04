import scp914RecipesData from "../../data/scp-914-recipes.json" with { type: "json" };
import { SCP914MultipleRecipeOutputList, SCP914RecipeOutput, SCP914Recipes, isSCP914ActionRecipeOutput, isSCP914ChanceRecipeOutput, isSCP914Item, isSCP914ItemCountRecipeOutput, isSCP914ItemRecipeOutput } from "../types.js";
import { getItemTranslation } from "./get-item-translation.js";

export function recipeToString(itemName: string, languageFolderName: string) {
    let output = "";

    const recipes = scp914RecipesData as SCP914Recipes;

    const recipe = recipes[itemName];

    if (!recipe) {
        return null;
    }

    for (const scp914Setting in recipe) {
        let settingOutput = "";

        const recipeOutput = recipe[scp914Setting];

        if (recipeOutput === undefined) {
            console.log(itemName);
        }

        if (Array.isArray(recipeOutput)) {
            settingOutput += handleMultipleScp914Outputs(recipeOutput, languageFolderName);
        } else {
            settingOutput += handleSingle914Output(recipeOutput, languageFolderName);
        }

        output += "\\n<color=yellow>" + scp914Setting + "</color> - " + settingOutput;
    }

    return output;
}

function handleMultipleScp914Outputs(recipeOutput: SCP914MultipleRecipeOutputList, languageFolderName: string) {
    let output = "";
    
    for (const element of recipeOutput) {
        if (Array.isArray(element)) {
            output += handleMultipleScp914Outputs(element, languageFolderName);
        } else {
            output += handleSingle914Output(element, languageFolderName);
        }

        output += ", ";
    }

    output = output.slice(0, output.length - 2);

    if (isSCP914ChanceRecipeOutput(recipeOutput)) {
        output += " (" + Math.floor(recipeOutput.Chance * 100) + "%)";
    }

    return output;
}

function handleSingle914Output(recipeOutput: Exclude<SCP914RecipeOutput, SCP914MultipleRecipeOutputList>, languageFolderName: string) {
    let output = "";

    if (isSCP914Item(recipeOutput)) {
        output = getItemTranslation(recipeOutput, languageFolderName);
    } else if (isSCP914ItemRecipeOutput(recipeOutput)) {
        if (isSCP914ItemCountRecipeOutput(recipeOutput)) {
            output = recipeOutput.Count + "x ";
        }

        output += getItemTranslation(recipeOutput.Item, languageFolderName);
    } else if (isSCP914ActionRecipeOutput(recipeOutput)) {
        output = recipeOutput.Action;
    } else {
        output = handleMultipleScp914Outputs(recipeOutput.Outputs, languageFolderName);
    }

    if (isSCP914ChanceRecipeOutput(recipeOutput)) {
        output += " (" + Math.floor(recipeOutput.Chance * 100) + "%)";
    }

    return output;
}
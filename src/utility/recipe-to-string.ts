import scp914RecipesData from "../../data/scp-914-recipes.json";
import { SCP914MultipleRecipeOutputList, SCP914RecipeOutput, SCP914Recipes, isSCP914ActionRecipeOutput, isSCP914ChanceRecipeOutput, isSCP914Item, isSCP914ItemCountRecipeOutput, isSCP914ItemRecipeOutput } from "../types";

export function recipeToString(itemName: string) {
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
            settingOutput += handleMultipleScp914Outputs(recipeOutput);
        } else {
            settingOutput += handleSingle914Output(recipeOutput);
        }

        output += "\\n<color=yellow>" + scp914Setting + "</color> - " + settingOutput;
    }

    return output;
}

function handleMultipleScp914Outputs(recipeOutput: SCP914MultipleRecipeOutputList) {
    let output = "";
    
    for (const element of recipeOutput) {
        if (Array.isArray(element)) {
            output += handleMultipleScp914Outputs(element);
        } else {
            output += handleSingle914Output(element);
        }

        output += ", ";
    }

    output = output.slice(0, output.length - 2);

    if (isSCP914ChanceRecipeOutput(recipeOutput)) {
        output += " (" + Math.floor(recipeOutput.Chance * 100) + "%)";
    }

    return output;
}

function handleSingle914Output(recipeOutput: Exclude<SCP914RecipeOutput, SCP914MultipleRecipeOutputList>) {
    let output = "";

    if (isSCP914Item(recipeOutput)) {
        output = recipeOutput;
    } else if (isSCP914ItemRecipeOutput(recipeOutput)) {
        if (isSCP914ItemCountRecipeOutput(recipeOutput)) {
            output = recipeOutput.Count + "x ";
        }

        output += recipeOutput.Item;
    } else if (isSCP914ActionRecipeOutput(recipeOutput)) {
        output = recipeOutput.Action;
    } else {
        output = handleMultipleScp914Outputs(recipeOutput.Outputs);
    }

    if (isSCP914ChanceRecipeOutput(recipeOutput)) {
        output += " (" + Math.floor(recipeOutput.Chance * 100) + "%)";
    }

    return output;
}
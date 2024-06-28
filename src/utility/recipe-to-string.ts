import { translationFilesNewLineCharacter } from "../constants.js";
import { Item, ItemDataFile, MultipleSCP914Outputs, SCP914Output, SCP914Setting, isActionObject, isChanceObject, isCountObject, isItem, isItemObject } from "../types.js";
import { getItemTranslation } from "./get-item-translation.js";
import itemDataFile from "../../data/item-data.json" with { type: "json" };
const typedItemDataFile = itemDataFile as ItemDataFile;

export function recipeToString(itemName: Item, languageFolderName: string) {
    let output = "";

    const recipe = typedItemDataFile[itemName]?.scp914Outputs;

    if (!recipe) {
        console.log("Item '" + itemName + "' has no defined SCP-914 recipes.");

        return null;
    }

    for (const scp914Setting in recipe) {
        const typedSetting = scp914Setting as SCP914Setting;

        let settingOutput = "";

        const recipeOutput = recipe[typedSetting];

        if (recipeOutput === undefined) {
            console.log("No SCP-914 recipe output found for item '" + itemName + "' on setting '" + typedSetting + "'.");
        }

        if (Array.isArray(recipeOutput)) {
            settingOutput += handleMultipleScp914Outputs(recipeOutput, languageFolderName);
        } else {
            settingOutput += handleSingle914Output(recipeOutput, languageFolderName);
        }

        output += translationFilesNewLineCharacter + "<color=yellow>" + settingOutput + "</color>";
    }

    return "<size=3>" + output + "</size>";
}

function handleMultipleScp914Outputs(recipeOutput: MultipleSCP914Outputs, languageFolderName: string) {
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

    if (isChanceObject(recipeOutput)) {
        output += " (" + Math.floor(recipeOutput.chance * 100) + "%)";
    }

    return output;
}

function handleSingle914Output(recipeOutput: SCP914Output, languageFolderName: string) {
    let output = "";

    if (isItem(recipeOutput)) {
        output = getItemTranslation(recipeOutput, languageFolderName);
    } else if (isItemObject(recipeOutput)) {
        if (isCountObject(recipeOutput)) {
            output = recipeOutput.count + "x ";
        }

        output += getItemTranslation(recipeOutput.item, languageFolderName);
    } else if (isActionObject(recipeOutput)) {
        output = recipeOutput.action;
    } else {
        output = handleMultipleScp914Outputs(recipeOutput.outputs, languageFolderName);
    }

    if (isChanceObject(recipeOutput)) {
        output += " (" + Math.floor(recipeOutput.chance * 100) + "%)";
    }

    return output;
}
import { readFileSync, writeFileSync } from "fs";
import { adsAccuracy as adsAccuracyIndex, armorPenetrationIndex, damageIndex, defaultLanguage, fireRateIndex, hipAccuracyIndex, inventoryGuiFilePath as inventoryGUIFilePath, inventoryGUIGunAttributeTextSize, movementSpeedIndex, newLineCharacter, runningAccuracyIndex, staminaUsageIndex } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function decreaseGunAttributeTextSize() {
    loopTranslationLanguages((folderName) => {
        const splitFolderName = folderName.split("/");
        const languageName = splitFolderName[splitFolderName.length - 1];

        const filePath = folderName + inventoryGUIFilePath;

        let content: string;

        try {
            content = readFileSync(filePath).toString();
        } catch (error) {
            console.log("Could not read file " + filePath + ".");
            return;
        }

        const split = content.split(newLineCharacter);

        const size = inventoryGUIGunAttributeTextSize[languageName] ?? inventoryGUIFilePath[defaultLanguage];

        for (const index of [damageIndex, fireRateIndex, hipAccuracyIndex, adsAccuracyIndex, staminaUsageIndex, movementSpeedIndex, armorPenetrationIndex, runningAccuracyIndex]) {
            const text = split[index];

            split[index] = "<size=" + size + ">" + text + "</size>"; 
        }

        writeFileSync(filePath, split.join(newLineCharacter));
    })
}
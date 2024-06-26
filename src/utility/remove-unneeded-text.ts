import { readFileSync, writeFileSync } from "fs";
import { invisibleCharacter, newLineCharacter, textToRemove } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";
import { removeClassDescriptions } from "./remove-class-descriptions.js";
import { removeItemDescriptions } from "./remove-item-descriptions.js";
import { removeUnneededLines } from "./remove-unneeded-lines.js";
import { removeSCPText } from "./remove-scp-text.js";

export function removeUnneededText() {
    removeClassDescriptions();

    removeItemDescriptions();

    removeUnneededLines();

    removeSCPText();

    loopTranslationLanguages((folderPath) => {
        for (const filePath in textToRemove) {
            const path = folderPath + filePath;

            let fileContent: string;

            try {
                fileContent = readFileSync(path).toString();
            } catch (error) {
                return;
            }

            const lines = fileContent.split(newLineCharacter);

            const textIndexesToRemove = textToRemove[filePath];

            for (const index of textIndexesToRemove) {
                lines[index] = invisibleCharacter;
            }

            writeFileSync(path, lines.join(newLineCharacter));
        }
    })
}
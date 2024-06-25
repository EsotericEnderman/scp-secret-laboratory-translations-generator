import { readFileSync, writeFileSync } from "fs";
import { invisibleCharacter, linesToRemove } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function removeUnneededText() {
    loopTranslationLanguages((folderPath) => {
        for (const filePath in linesToRemove) {
            const path = folderPath + filePath;

            const fileContent = readFileSync(path).toString();
            const lines = fileContent.split(/\r\n/);
            
            const lineIndexesToRemove = linesToRemove[filePath];

            for (const index of lineIndexesToRemove) {
                lines[index] = invisibleCharacter;
            }

            writeFileSync(path, lines.join("\r\n"));
        }
    })
}
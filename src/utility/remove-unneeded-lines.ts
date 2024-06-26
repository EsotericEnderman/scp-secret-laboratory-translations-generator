import { readFileSync, writeFileSync } from "fs";
import { linesToRemove, newLineCharacter } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function removeUnneededLines() {
    loopTranslationLanguages((folderPath) => {
        for (const filePath in linesToRemove) {
            const fullFilePath = folderPath + filePath;

            const fileContent = readFileSync(fullFilePath).toString();

            const lines = fileContent.split(newLineCharacter);

            const info = linesToRemove[filePath];

            const index = info[0];
            const lineIndexesToRemove = info[1];

            let line = lines[index];
            let splitLine = line.split("\\n");

            for (const lineIndexToRemove of lineIndexesToRemove) {
                splitLine = splitLine.splice(lineIndexToRemove - 1, 1);
            }

            line = splitLine.join("\\n");
            lines[index] = line;

            writeFileSync(fullFilePath, lines.join(newLineCharacter));
        }
    })
}
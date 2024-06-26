import { readFileSync, writeFileSync } from "fs";
import { newLineCharacter, textToReplace } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function replaceText() {
    loopTranslationLanguages((folderPath) => {
        for (const filePath in textToReplace) {
            const fullFilePath = folderPath + filePath;

            const fileContent = readFileSync(fullFilePath).toString();

            const lines = fileContent.split(newLineCharacter);

            const info = textToReplace[filePath];
            
            for (const replacement of info) {
                const index = replacement[0];
                const string = replacement[1];

                lines[index] = string;
            }

            writeFileSync(fullFilePath, lines.join(newLineCharacter));
        }
    })
}
import { readFileSync, writeFileSync } from "fs";
import { textToReplace } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function replaceText() {
    loopTranslationLanguages((folderPath) => {
        for (const filePath in textToReplace) {
            const fullFilePath = folderPath + filePath;

            const fileContent = readFileSync(fullFilePath).toString();

            const lines = fileContent.split("\r\n");

            const info = textToReplace[filePath];
            
            for (const replacement of info) {
                const index = replacement[0];
                const string = replacement[1];

                lines[index] = string;
            }

            writeFileSync(fullFilePath, lines.join("\r\n"));
        }
    })
}
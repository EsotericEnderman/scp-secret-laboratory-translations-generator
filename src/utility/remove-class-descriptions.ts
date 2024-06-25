import { readFileSync, writeFileSync } from "fs";
import { classDescriptionsFilePath } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function removeClassDescriptions() {
    loopTranslationLanguages((folderPath) => {
        const classDescriptionsFullFilePath = folderPath + classDescriptionsFilePath;

        const classDescriptionsFile = readFileSync(classDescriptionsFullFilePath).toString();

        const lines = classDescriptionsFile.split(/\r\n/);

        for (let i = 0; i < lines.length; i++) {
            lines[i] = "\r\n";
        }

        writeFileSync(classDescriptionsFullFilePath, lines.join(""));
    })
}
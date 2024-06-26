import { readFileSync, writeFileSync } from "fs";
import { itemsFilePath, splitCharacter } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function removeItemDescriptions() {
    loopTranslationLanguages((folderPath) => {
        const itemsFileFullPath = folderPath + itemsFilePath;

        const fileContent = readFileSync(itemsFileFullPath).toString();

        const lines = fileContent.split("\r\n");

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            const sections = line.split(splitCharacter);

            if (sections[2]) {
                lines[i] = sections[0] + splitCharacter + sections[1];
            }
        }

        writeFileSync(itemsFileFullPath, lines.join("\r\n"));
    })
}
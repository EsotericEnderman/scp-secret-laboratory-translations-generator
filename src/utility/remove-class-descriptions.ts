import { readFileSync, writeFileSync } from "fs";
import { classDescriptionsFilePath, invisibleCharacter } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function removeClassDescriptions() {
    loopTranslationLanguages((folderPath) => {
        const classDescriptionsFullFilePath = folderPath + classDescriptionsFilePath;

        const classDescriptionsFile = readFileSync(classDescriptionsFullFilePath).toString();

        const lines = classDescriptionsFile.split(/\r\n/);

        let string = invisibleCharacter;

        for (let i = 1; i < lines.length; i++) {
            string += "\r\n" + invisibleCharacter;
        }

        writeFileSync(classDescriptionsFullFilePath, string);
    })
}
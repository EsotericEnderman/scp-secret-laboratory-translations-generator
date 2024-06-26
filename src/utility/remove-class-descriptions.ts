import { readFileSync, writeFileSync } from "fs";
import { classDescriptionsFilePath, invisibleCharacter, newLineCharacter } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function removeClassDescriptions() {
    loopTranslationLanguages((folderPath) => {
        const classDescriptionsFullFilePath = folderPath + classDescriptionsFilePath;

        const classDescriptionsFile = readFileSync(classDescriptionsFullFilePath).toString();

        const lines = classDescriptionsFile.split(newLineCharacter);

        let string = invisibleCharacter;

        for (let i = 1; i < lines.length; i++) {
            string += newLineCharacter + invisibleCharacter;
        }

        writeFileSync(classDescriptionsFullFilePath, string);
    })
}
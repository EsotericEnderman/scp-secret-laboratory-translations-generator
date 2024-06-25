import { readFileSync, writeFileSync } from "fs";
import { facilityFilePath, invisibleCharacter, youAreTextIndex } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function removeYouAreText() {
    loopTranslationLanguages((folderPath) => {
        const facilityFullFilePath = folderPath + facilityFilePath;

        const content = readFileSync(facilityFullFilePath).toString();

        const lines = content.split(/\r\n/);

        lines[youAreTextIndex] = invisibleCharacter;

        writeFileSync(facilityFullFilePath, lines.join("\r\n"));
    })
}
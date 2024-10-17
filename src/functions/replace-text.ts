import { readFileSync, writeFileSync } from "fs";
import { newLineCharacter, textToReplace } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";
import { replaceLanguageSpecificText } from "./replace-language-specific-text.js";

export function replaceText() {
    replaceLanguageSpecificText();

    loopTranslationLanguages((folderPath) => {
        for (const filePath in textToReplace) {
            const fullFilePath = folderPath + filePath;

            let fileContent: string;

            try {
                fileContent = readFileSync(fullFilePath).toString();
            } catch (error) {
                console.log("Could not read file " + fullFilePath + ".");
                return;
            }

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

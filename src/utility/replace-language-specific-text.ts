import { readFileSync, writeFileSync } from "fs";
import { languageSpecificTextToReplace, newLineCharacter } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function replaceLanguageSpecificText() {
    loopTranslationLanguages((folderPath) => {
        for (const filePath in languageSpecificTextToReplace) {
            const fullFilePath = folderPath + filePath;

            let fileContent: string;

            try {
                fileContent = readFileSync(fullFilePath).toString();
            } catch (error) {
                console.log("Could not read file " + fullFilePath + ".");
                return;
            }

            const lines = fileContent.split(newLineCharacter);

            const info = languageSpecificTextToReplace[filePath];
            
            replacementLoop: for (const replacement of info) {
                const index = replacement[0];
                const sourceFilePath = replacement[1];
                const sourceIndex = replacement[2];

                const sourceFullFilePath = folderPath + sourceFilePath;

                let sourceFileContents: string;

                try {
                    sourceFileContents = readFileSync(sourceFullFilePath).toString();
                } catch (error) {
                    console.log("Could not read source file " + sourceFullFilePath + ".");
                    continue replacementLoop;
                }

                const sourceFileLines = sourceFileContents.split(newLineCharacter);
                const string = sourceFileLines[sourceIndex];

                lines[index] = string;
            }

            writeFileSync(fullFilePath, lines.join(newLineCharacter));
        }
    })
}
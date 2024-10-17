import { readFileSync, writeFileSync } from "fs";
import { newLineCharacter } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";
import { loopTranslationLanguageFiles } from "./loop-translation-language-files.js";

export function removeSCPText() {
    loopTranslationLanguages((folderPath) => {
        loopTranslationLanguageFiles(folderPath, (filePath) => {
            const fileContent = readFileSync(filePath).toString();

            const lines = fileContent.split(newLineCharacter);

            for (let i = 0; i < lines.length; i++) {
                let line = lines[i];

                line = line.replace(/(\w+)-0+(\d+)/g, "$1-$2");
                line = line.replace(/SCP-/g, "");

                lines[i] = line;
            }

            writeFileSync(filePath, lines.join(newLineCharacter));
        })
    })
}

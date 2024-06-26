import { readFileSync, writeFileSync } from "fs";
import { classNamesFilePath, newLineCharacter, raRoleManagementFilePath } from "../constants.js";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function removeSCPText() {
    loopTranslationLanguages((folderPath) => {
        for (const filePath of [classNamesFilePath, raRoleManagementFilePath]) {
            const fullFilePath = folderPath + filePath;

            const fileContent = readFileSync(fullFilePath).toString();
    
            const lines = fileContent.split(newLineCharacter);
    
            for (let i = 0; i < lines.length; i++) {
                let line = lines[i];
    
                line = line.replace("SCP-", "");
                line = line.replace(/^0+/, "");
    
                lines[i] = line;
            }
    
            writeFileSync(fullFilePath, lines.join(newLineCharacter));
        }
    })
}
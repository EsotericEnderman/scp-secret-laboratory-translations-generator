import { renameSync } from "fs";
import { loopTranslationLanguages } from "./loop-translation-languages.js";
import { updatedFolderPathEnding } from "../constants.js";

export function renameLanguageDirectories() {
    loopTranslationLanguages((folderPath) => {
        renameSync(folderPath, folderPath + updatedFolderPathEnding);
    })
}
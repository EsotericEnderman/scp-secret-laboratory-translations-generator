import { renameSync } from "fs";
import { loopTranslationLanguages } from "./loop-translation-languages.js";

export function renameLanguageDirectories() {
    loopTranslationLanguages((folderPath) => {
        renameSync(folderPath, folderPath + "-updated");
    })
}
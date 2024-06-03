import { renameSync } from "fs";
import { loopTranslationLanguages } from "./loop-translation-languages";

export function renameLanguageDirectories() {
    loopTranslationLanguages((folderPath) => {
        renameSync(folderPath, folderPath + "-updated");
    })
}
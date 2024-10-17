import { readdirSync } from "fs";
import { translationsOutputPath } from "../constants.js";

export function loopTranslationLanguages(callback: (folderPath: string) => void) {
    const translationLanguageFolders = readdirSync(translationsOutputPath);

    for (const languageFolder of translationLanguageFolders) {
        if (languageFolder === "mod") {
            continue;
        }

        callback(translationsOutputPath + "/" + languageFolder);
    }
}

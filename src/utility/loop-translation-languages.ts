import { readdirSync } from "fs";
import { translationsOutputPath } from "../constants";

export function loopTranslationLanguages(callback: (folderPath: string) => void) {
    const translationlanguageFolders = readdirSync(translationsOutputPath);

    for (const languageFolder of translationlanguageFolders) {
        if (languageFolder === "mod") {
            continue;
        }

        callback(translationsOutputPath + "/" + languageFolder);
    }
}
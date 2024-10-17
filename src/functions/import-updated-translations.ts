import { cpSync } from "fs";
import { translationsFolderPath, translationsOutputPath } from "../constants.js";

export function importUpdatedTranslations() {
    cpSync(translationsOutputPath, translationsFolderPath, {recursive: true})
}

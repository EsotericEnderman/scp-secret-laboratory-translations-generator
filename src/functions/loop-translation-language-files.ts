import { readdirSync } from "fs";

export function loopTranslationLanguageFiles(translationLanguageFilePath: string, callback: (filePath: string) => void) {
    const files = readdirSync(translationLanguageFilePath);

    for (const file of files) {
        callback(translationLanguageFilePath + "/" + file);
    }
}

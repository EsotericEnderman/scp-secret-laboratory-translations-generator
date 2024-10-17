import { readFileSync, writeFileSync } from "fs";
import { loopTranslationLanguages as loopTranslationLanguageFolders } from "./loop-translation-languages.js";
import { newAuthors } from "../constants.js";

export function updateLanguageManifests() {
    loopTranslationLanguageFolders((folderPath) => {
        const manifestFilePath = folderPath + "/manifest.json";

        const manifest = JSON.parse(readFileSync(manifestFilePath).toString());

        manifest.Name += " (Updated)";
        newAuthors.forEach(author => (manifest.Authors as string[]).push(author));

        writeFileSync(manifestFilePath, JSON.stringify(manifest));
    });
}

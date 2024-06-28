import {cpSync, mkdirSync} from "fs";
import { translationsOutputPath, updatedFolderPathEnding, workDirectoryPath } from "../constants.js";

export function copyTranslationFolder(translationsFolderPath: string) {
    mkdirSync(workDirectoryPath);
    mkdirSync(translationsOutputPath);

    cpSync(translationsFolderPath, translationsOutputPath, {recursive: true, filter: (source) => !source.endsWith(updatedFolderPathEnding)});
}
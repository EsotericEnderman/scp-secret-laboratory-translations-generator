import {cpSync, mkdirSync} from "fs";
import { translationsOutputPath } from "../constants.js";

export function copyTranslationFolder(translationsFolderPath: string) {
    mkdirSync(translationsOutputPath);

    cpSync(translationsFolderPath, translationsOutputPath, {recursive: true, filter: (source) => !source.endsWith("-updated")});
}
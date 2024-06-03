import {cpSync, mkdirSync} from "fs";
import { translationsOutputPath } from "../constants";

export function copyTranslationFolder(translationsFolderPath: string) {
    mkdirSync(translationsOutputPath);

    cpSync(translationsFolderPath, translationsOutputPath, {recursive: true});
}
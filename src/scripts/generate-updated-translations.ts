import {cpSync, mkdirSync} from "fs";

const translationsOutputPath = "out/Translations";

mkdirSync(translationsOutputPath);

const translationsFolderPath = "C:/Program Files (x86)/Steam/steamapps/common/SCP Secret Laboratory/Translations";

cpSync(translationsFolderPath, translationsOutputPath, {recursive: true});
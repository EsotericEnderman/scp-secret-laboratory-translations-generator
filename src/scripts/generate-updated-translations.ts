import { translationsFolderPath } from "../constants.js";
import { clearWorkDirectory } from "../functions/clear-work-directory.js";
import { copyTranslationFolder } from "../functions/copy-translation-folder.js";
import { decreaseGunAttributeTextSize } from "../functions/decrease-gun-attribute-text-size.js";
import { importUpdatedTranslations } from "../functions/import-updated-translations.js";
import { removeUnneededText } from "../functions/remove-unneeded-text.js";
import { renameLanguageDirectories } from "../functions/rename-directories.js";
import { replaceText } from "../functions/replace-text.js";
import { updateItemTranslations } from "../functions/update-item-translations.js";
import { updateLanguageManifests } from "../functions/update-language-manifests.js";

clearWorkDirectory();

copyTranslationFolder(translationsFolderPath);

removeUnneededText();

replaceText();

updateItemTranslations();

decreaseGunAttributeTextSize();

updateLanguageManifests();

renameLanguageDirectories();

importUpdatedTranslations();

clearWorkDirectory();

import { translationsFolderPath } from "../constants.js";
import { clearOutputDirectory } from "../utility/clear-output-directory.js";
import { copyTranslationFolder } from "../utility/copy-translation-folder.js";
import { importUpdatedTranslations } from "../utility/import-updated-translations.js";
import { removeClassDescriptions } from "../utility/remove-class-descriptions.js";
import { renameLanguageDirectories } from "../utility/rename-directories.js";
import { updateItemTranslations } from "../utility/update-item-translations.js";
import { updateLanguageManifests } from "../utility/update-language-manifests.js";

clearOutputDirectory();

copyTranslationFolder(translationsFolderPath);

updateItemTranslations();

removeClassDescriptions();

updateLanguageManifests();

renameLanguageDirectories();

importUpdatedTranslations();
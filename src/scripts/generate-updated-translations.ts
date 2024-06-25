import { translationsFolderPath } from "../constants.js";
import { clearWorkDirectory } from "../utility/clear-work-directory.js";
import { copyTranslationFolder } from "../utility/copy-translation-folder.js";
import { importUpdatedTranslations } from "../utility/import-updated-translations.js";
import { removeClassDescriptions } from "../utility/remove-class-descriptions.js";
import { removeYouAreText } from "../utility/remove-you-are-text.js";
import { renameLanguageDirectories } from "../utility/rename-directories.js";
import { updateItemTranslations } from "../utility/update-item-translations.js";
import { updateLanguageManifests } from "../utility/update-language-manifests.js";

clearWorkDirectory();

copyTranslationFolder(translationsFolderPath);

updateItemTranslations();

removeClassDescriptions();

removeYouAreText();

updateLanguageManifests();

renameLanguageDirectories();

importUpdatedTranslations();
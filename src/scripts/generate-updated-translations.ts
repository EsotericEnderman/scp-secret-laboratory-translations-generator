import { translationsFolderPath } from "../constants";
import { clearOutputDirectory } from "../utility/clear-output-directory";
import { copyTranslationFolder } from "../utility/copy-translation-folder";
import { renameLanguageDirectories } from "../utility/rename-directories";
import { updateItemTranslations } from "../utility/update-item-translations";
import { updateLanguageManifests } from "../utility/update-language-manifests";

clearOutputDirectory();

copyTranslationFolder(translationsFolderPath);

updateItemTranslations();

updateLanguageManifests();

renameLanguageDirectories();
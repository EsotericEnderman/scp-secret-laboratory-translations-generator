export const translationsFolderPath = "C:/Program Files (x86)/Steam/steamapps/common/SCP Secret Laboratory/Translations";

export const itemsFilePath = "/Items.txt";
export const classDescriptionsFilePath = "/Class_Descriptions.txt"
export const facilityFilePath = "/Facility.txt"
export const disarmingFilePath = "/Disarming.txt"

export const workDirectoryPath = "work";
export const dataFolderPath = "data";
export const translationsOutputPath = workDirectoryPath + "/Translations";
export const scp914RecipesFilePath = dataFolderPath + "/scp-914-recipes.json";

export const invisibleCharacter = "ㅤ"

export const scientistEscapeIndex = 29
export const classDEscapeIndex = 30;
export const youAreTextIndex = 31;
export const pressF1ForHelpIndex = 34;
export const classDCaptureIndex = 36;
export const scientistCaptureIndex = 37;
export const cancelThrowKeybindIndex = 41;

export const followOrdersIndex = 2;

export const linesToRemove = {
    [facilityFilePath]: [scientistEscapeIndex, classDEscapeIndex, youAreTextIndex, classDCaptureIndex, scientistCaptureIndex, cancelThrowKeybindIndex],
    [disarmingFilePath]: [followOrdersIndex]
}
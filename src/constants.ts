export const translationsFolderPath = "C:/Program Files (x86)/Steam/steamapps/common/SCP Secret Laboratory/Translations";

export const workDirectoryPath = "work";
export const dataFolderPath = "data";
export const translationsOutputPath = workDirectoryPath + "/Translations";
export const scp914RecipesFilePath = dataFolderPath + "/scp-914-recipes.json";

export const itemsFilePath = "/Items.txt";

export const classDescriptionsFilePath = "/Class_Descriptions.txt"

export const facilityFilePath = "/Facility.txt"

export const scientistEscapeIndex = 29
export const classDEscapeIndex = 30;
export const youAreTextIndex = 31;
export const pressF1ForHelpIndex = 34;

export const cuffedIndex = 35;

export const cuffedFollowOrdersLineIndex = 1;

export const classDCaptureIndex = 36;
export const scientistCaptureIndex = 37;
export const cancelThrowKeybindIndex = 41;

export const disarmingFilePath = "/Disarming.txt"

export const followOrdersIndex = 2;

export const legacyInterfacesFilePath = "/Legacy_Interfaces.txt";

export const legacyInterfacesGiveOrdersIndex = 0;
export const legacyInterfacesFollowOrdersIndex = 1;
export const legacyInterfacesSameRankIndex = 2;
export const legacyInterfacesYouDiedIndex = 14;
export const legacyInterfacesYouWereKilledByIndex = 15;
export const legacyInterfacesAsIndex = 16;

export const version7FilePath = "/Version_7-0-0.txt";

export const youDiedIndex = 0;

export const scp049HUDFilePath = "/SCP049_HUD.txt";

export const reviveIndex = 21;
export const holdKeyIndex = 22;

export const scp3114HUDFilePath = "/SCP3114_HUD.txt";

export const disguiseIndex = 9;
export const strangulationCooldownIndex = 10;

export const textToRemove: {[filePath: string]: number[]} = {
    [facilityFilePath]: [scientistEscapeIndex, classDEscapeIndex, youAreTextIndex, pressF1ForHelpIndex, classDCaptureIndex, scientistCaptureIndex, cancelThrowKeybindIndex],
    [disarmingFilePath]: [followOrdersIndex],
    [legacyInterfacesFilePath]: [legacyInterfacesGiveOrdersIndex, legacyInterfacesFollowOrdersIndex, legacyInterfacesSameRankIndex, legacyInterfacesYouDiedIndex, legacyInterfacesYouWereKilledByIndex, legacyInterfacesAsIndex],
    [version7FilePath]: [youDiedIndex],
    [scp049HUDFilePath]: [reviveIndex, holdKeyIndex],
    [scp3114HUDFilePath]: [disguiseIndex, strangulationCooldownIndex],
}

export const linesToRemove: {[filePath: string]: [number, number[]]} = {
    [facilityFilePath]: [cuffedIndex, [cuffedFollowOrdersLineIndex]]
}

export const invisibleCharacter = "ㅤ"
export const splitCharacter = "~";
export const newLineCharacter = "\r\n";
export const translationFilesNewLineCharacter = "\\n";
export const invisibleCharacter = "ㅤ"
export const splitCharacter = "~";

export const playerVariable = "[player]";
export const userVariable = "[user]";
export const classVariable = "[class]";
export const causeVariable = "[cause]";
export const escapeMinutesVariable = "[escape_minutes]";
export const escapeSecondsVariable = "[escape_seconds]";
export const timeVariable = "[time]";
export const designationVariable = "[designation]";
export const countVariable = "[count]";
export const scpVariable = "[scp]";
export const currentVariable = "[current]";
export const maximumVariable = "[max]";
export const ammoTypeVariable = "[ammotype]";
export const roleNameVariable = "[role_name]";
export const playerNameVariable = "[player_name]"

export const translationsFolderPath = "C:/Program Files (x86)/Steam/steamapps/common/SCP Secret Laboratory/Translations";

export const workDirectoryPath = "work";
export const dataFolderPath = "data";
export const translationsOutputPath = workDirectoryPath + "/Translations";
export const scp914RecipesFilePath = dataFolderPath + "/scp-914-recipes.json";

export const itemsFilePath = "/Items.txt";

export const classNamesFilePath = "/Class_Names.txt"

export const raRoleManagementFilePath = "/RA_RoleManagement.txt";

export const classDescriptionsFilePath = "/Class_Descriptions.txt"

export const facilityFilePath = "/Facility.txt"

export const scientistEscapeIndex = 29
export const classDEscapeIndex = 30;
export const youAreTextIndex = 31;
export const escapeTimeIndex = 32;
export const waitTimeUntilUseIndex = 33;
export const pressF1ForHelpIndex = 34;
export const blowOutCandlesIndex = 48;

export const cuffedIndex = 35;

export const cuffedFollowOrdersLineIndex = 1;

export const classDCaptureIndex = 36;
export const scientistCaptureIndex = 37;
export const cancelThrowKeybindIndex = 41;

export const disarmingFilePath = "/Disarming.txt"

export const detainedByPlayerIndex = 0;
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

export const deathReasonsFilePath = "/DeathReasons.txt";

export const userClassDeathCauseIndex = 0;
export const recontainedIndex = 1;
export const scp049DeathIndex = 3;
export const unknownCauseOfDeathIndex = 4;
export const pocketDimensionDeathIndex = 11;
export const poisonDeathIndex = 13;
export const alternativePoisonDeathIndex = 14;
export const scp207DeathIndex = 15;
export const alternativeSCP207DeathIndex = 16;
export const scp330DeathIndex = 17;
export const scp096DeathIndex = 21;
export const scp173DeathIndex = 22;
export const scp939DeathIndex = 23;
export const scp049_2DeathIndex = 24;
export const ammoTypeIndex = 25;
export const scp012DeathIndex = 26;
export const scp106RecontainmentIndex = 27;
export const alternativeSCP106RecontainmentIndex = 28;
export const scp244DeathIndex = 30;
export const alternativeSCP244DeathIndex = 31;
export const alternativeScp939DeathIndex = 32;

export const inventoryGuiFilePath = "/InventoryGUI.txt"

export const ammoCountIndex = 0;
export const totalIndex = 14;

export const subtitlesFilePath = "/Subtitles.txt";

export const mtfEntryIndex = 0;
export const scpSubjectsMultipleRemainingIndex = 1;
export const scpSubjectsSingleRemainingIndex = 2;
export const scpIndex = 11;
export const generatorsActivatedIndex = 15;
export const lczDecontaminationIn15MinutesIndex = 19;
export const lczDecontaminationInTimeMinutesIndex = 20;
export const lczDecontaminationIn1MinuteIndex = 21;
export const lczDecontaminationIn30SecondsIndex = 22;
export const detonationStartedIndex = 24;
export const detonationResumedIndex = 26;

export const scp049HUDFilePath = "/SCP049_HUD.txt";

export const reviveIndex = 21;
export const holdKeyIndex = 22;

export const scp3114HUDFilePath = "/SCP3114_HUD.txt";

export const nowDisguisedAsIndex = 0;
export const unableToAttackIndex = 1;
export const itemsHeldCantBeUsedIndex = 2;
export const pressKeyToCommunicateIndex = 3;
export const alreadyDisguisedIndex = 5;
export const unrecognisablePileOfBonesIndex = 7;
export const disguiseIndex = 9;
export const strangulationCooldownIndex = 10;
export const removeDisguiseIndex = 15;

export const scp1507FilePath = "/SCP1507_HUD.txt";

export const vocaliseIndex = 4;

export const scp096HUDFilePath = "/SCP096_HUD.txt";

export const enterRageIndex = 6;
export const exitRageIndex = 7;

export const scp939HUDFilePath = "/SCP939_HUD.txt";

export const lungeIndex = 0;

export const textToRemove: { [filePath: string]: number[] } = {
    [deathReasonsFilePath]: [recontainedIndex, unknownCauseOfDeathIndex],
    [facilityFilePath]: [scientistEscapeIndex, classDEscapeIndex, youAreTextIndex, pressF1ForHelpIndex, classDCaptureIndex, scientistCaptureIndex, cancelThrowKeybindIndex, blowOutCandlesIndex],
    [disarmingFilePath]: [followOrdersIndex],
    [legacyInterfacesFilePath]: [legacyInterfacesGiveOrdersIndex, legacyInterfacesFollowOrdersIndex, legacyInterfacesSameRankIndex, legacyInterfacesYouDiedIndex, legacyInterfacesYouWereKilledByIndex, legacyInterfacesAsIndex],
    [version7FilePath]: [youDiedIndex],
    [scp049HUDFilePath]: [reviveIndex, holdKeyIndex],
    [scp3114HUDFilePath]: [unableToAttackIndex, itemsHeldCantBeUsedIndex, pressKeyToCommunicateIndex, alreadyDisguisedIndex, disguiseIndex, strangulationCooldownIndex, removeDisguiseIndex],
    [scp1507FilePath]: [vocaliseIndex],
    [scp096HUDFilePath]: [enterRageIndex, exitRageIndex],
    [scp939HUDFilePath]: [lungeIndex]
}

export const linesToRemove: { [filePath: string]: [number, number[]] } = {
    [facilityFilePath]: [cuffedIndex, [cuffedFollowOrdersLineIndex]]
}

export const textToReplace: { [filePath: string]: [number, string][] } = {
    [facilityFilePath]: [[escapeTimeIndex, escapeMinutesVariable + ":" + escapeSecondsVariable], [waitTimeUntilUseIndex, timeVariable]],
    [disarmingFilePath]: [[detainedByPlayerIndex, playerVariable]],
    [deathReasonsFilePath]: [
        [userClassDeathCauseIndex, `${userVariable}${translationFilesNewLineCharacter}${classVariable}${translationFilesNewLineCharacter}${causeVariable}`],
        [scp049DeathIndex, "49"],
        [pocketDimensionDeathIndex, "106"],
        [poisonDeathIndex, "1853 + 207"],
        [alternativePoisonDeathIndex, "1853 + 207"],
        [scp207DeathIndex, "207"],
        [alternativeSCP207DeathIndex, "207"],
        [scp330DeathIndex, "330"],
        [scp096DeathIndex, "96"],
        [scp173DeathIndex, "173"],
        [scp939DeathIndex, "939"],
        [scp049_2DeathIndex, "49-2"],
        [ammoTypeIndex, ammoTypeVariable],
        [scp012DeathIndex, "12"],
        [scp106RecontainmentIndex, "106"],
        [alternativeSCP106RecontainmentIndex, "106"],
        [scp244DeathIndex, "244"],
        [alternativeSCP244DeathIndex, "244"],
        [alternativeScp939DeathIndex, "939"]
    ],
    [inventoryGuiFilePath]: [[ammoCountIndex, "{0}/{1} {2}"], [totalIndex, "{0}"]],
    [subtitlesFilePath]: [[mtfEntryIndex, designationVariable + " - "], [scpSubjectsMultipleRemainingIndex, countVariable], [scpSubjectsSingleRemainingIndex, "1"], [scpIndex, scpVariable], [generatorsActivatedIndex, currentVariable + "/" + maximumVariable], [lczDecontaminationIn15MinutesIndex, "15"], [lczDecontaminationInTimeMinutesIndex, timeVariable], [lczDecontaminationIn1MinuteIndex, "1"], [lczDecontaminationIn30SecondsIndex, "0.5"], [detonationStartedIndex, timeVariable], [detonationResumedIndex, timeVariable]],
    [scp3114HUDFilePath]: [
        [nowDisguisedAsIndex, roleNameVariable],
        [unrecognisablePileOfBonesIndex, playerNameVariable]
    ]
}
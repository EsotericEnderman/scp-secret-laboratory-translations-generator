import { objectIncludeValue as objectIncludesValue } from "./utility/object-includes-value.js";

// Basic types

type Chance = number;
type Count = number;
type TextSize = number;

// Enums

export enum Item {
    JanitorKeycard = "Janitor Keycard",
    ScientistKeycard = "Scientist Keycard",
    ResearchSupervisorKeycard = "Research Supervisor Keycard",
    ZoneManagerKeycard = "Zone Manager Keycard",
    GuardKeycard = "Guard Keycard",
    MTFPrivateKeycard = "MTF Private Keycard",
    ContainmentEngineerKeycard = "Containment Engineer Keycard",
    MTFOperativeKeycard = "MTF Operative Keycard",
    MTFCaptainKeycard = "MTF Captain Keycard",
    FacilityManagerKeycard = "Facility Manager Keycard",
    ChaosInsurgencyAccessDevice = "Chaos Insurgency Access Device",
    O5LevelKeycard = "O5-level Keycard",
    Radio = "Radio",
    COM15 = "COM-15",
    FirstAidKit = "First Aid Kit",
    Flashlight = "Flashlight",
    MicroHID = "Micro H.I.D.",
    SCP500 = "SCP-500",
    SCP207 = "SCP-207",
    BuckshotAmmo127 = "12/7 Buckshot Ammo",
    MTFE11SR = "MTF-E11-SR",
    Crossvec = "Crossvec",
    Ammo556x45mm = "5.56x45mm Ammo",
    FSP9 = "FSP-9",
    Logicer = "Logicer",
    HighExplosiveGrenade = "High-Explosive Grenade",
    FlashbangGrenade = "Flashbang Grenade",
    MagAmmo44 = ".44mag Ammo",
    Ammo762x39mm = "7.62x39mm Ammo",
    Ammo9x19mm = "9x19mm Ammo",
    COM18 = "COM-18",
    SCP018 = "SCP-018",
    SCP268 = "SCP-268",
    Adrenaline = "Adrenaline",
    Painkillers = "Painkillers",
    Coin = "Coin",
    LightArmor = "Light Armor",
    CombatArmor = "Combat Armor",
    HeavyArmor = "Heavy Armor",
    Revolver44 = ".44 Revolver",
    AK = "AK",
    Shotgun = "Shotgun",
    SCP2176 = "SCP-2176",
    SCP244A = "SCP-244-A",
    SCP244B = "SCP-244-B",
    SCP1853 = "SCP-1853",
    ParticleDisruptor3X = "3-X Particle Disruptor",
    COM45 = "COM-45",
    SCP1576 = "SCP-1576",
    Jailbird = "Jailbird",
    AntiSCP207 = "SCP-207?",
    FRMG0 = "FR-MG-0",
    A7 = "A7",
    Lantern = "Lantern"
}

export enum SCP914Action {
    AttachmentRandomization = "Randomizes attachments",
    ItemDestruction = "Destroys the item",
    Reload = "Reloads",
    Recharge = "Recharges",
    Shatter = "Shatters"
}

export enum SCP914Setting {
    Rough = "Rough",
    Coarse = "Coarse",
    OneToOne = "1:1",
    Fine = "Fine",
    VeryFine = "Very Fine"
}

// Base objects

export type ItemObject = {
    item: Item
}

export type CountObject = {
    count: Count
}

export type ChanceObject = {
    chance: Chance
}

export type ActionObject = {
    action: SCP914Action
}

// More complicated objects

export type ItemCountObject = ItemObject & CountObject;

// Used types

export type SCP914ChanceRecipe = (ItemObject | OutputsObject) & ChanceObject;
export type SCP914CountRecipe = ItemCountObject | (ItemCountObject & ChanceObject)
export type SCP914ActionRecipe = ActionObject | (ActionObject & ChanceObject)

export type SCP914Output = Item | SCP914ChanceRecipe | SCP914CountRecipe | SCP914ActionRecipe | OutputsObject;

export type MultipleSCP914Outputs = SCP914Output[];

export type OutputsObject = {
    outputs: SCP914Output[]
}

export type SCP914RecipeOutput = SCP914Output | MultipleSCP914Outputs;

export type SCP914Outputs = {
    [scp914Setting in SCP914Setting]: SCP914RecipeOutput
}

export type ItemData = {
    itemDescriptionTextSize?: {[langauge: string]: TextSize},
    scp914Outputs: SCP914Outputs
}

export type ItemDataFile = {
    [itemName in Item]: ItemData
}

// Functions

// Type functions for used types

export function isItem(object: any): object is Item {
    return objectIncludesValue(Item, object);
}

// Basic type functions

export function isItemObject(object: any): object is ItemObject {
    return Object.hasOwn(object, "item") && isItem(object.item); 
}

export function isCountObject(object: any): object is CountObject {
    return Object.hasOwn(object, "count") && typeof object.count === "number"; 
}

export function isChanceObject(object: any): object is ChanceObject {
    return Object.hasOwn(object, "chance") && typeof object.chance === "number";
}

export function isActionObject(object: any): object is ActionObject {
    return Object.hasOwn(object, "action") && objectIncludesValue(SCP914Action, object.action);
}
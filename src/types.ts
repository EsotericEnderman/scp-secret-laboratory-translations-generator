export type SCP914Item = string;
export type SCP914ItemRecipeOutput = {Item: string};

type SCP914Count = number;
export type SCP914ItemCountRecipeOutput = SCP914ItemRecipeOutput & {Count: SCP914Count};

type SCP914Aciton = string;
export type SCP914ActionRecipeOutput = {Action: SCP914Aciton};

export type SCP914RecipeOutput = SCP914Item | SCP914ItemRecipeOutput | SCP914ActionRecipeOutput | SCP914MultipleRecipeOutputList | SCP914MultipleRecipeOutputs;

type SCP914Chance = number;
type SCP914ChanceRecipeOutput = SCP914RecipeOutput & {Chance: SCP914Chance};
type SCP914ChanceRecipeOutputList = SCP914ChanceRecipeOutput[];

export type SCP914MultipleRecipeOutputList = (SCP914RecipeOutput | SCP914ChanceRecipeOutput)[] | SCP914ChanceRecipeOutputList;
export type SCP914MultipleRecipeOutputs = {Outputs: SCP914MultipleRecipeOutputList};

type SCP914Recipe = {[scp914Setting: string]: SCP914RecipeOutput};
export type SCP914Recipes = {[itemName: string]: SCP914Recipe};

export function isSCP914Item(scp914RecipeOutput: SCP914RecipeOutput): scp914RecipeOutput is SCP914Item {
    return typeof scp914RecipeOutput === "string";
}

export function isSCP914ItemRecipeOutput(scp914RecipeOutput: SCP914RecipeOutput): scp914RecipeOutput is SCP914ItemRecipeOutput {
    if (isSCP914Item(scp914RecipeOutput)) {
        return false;
    }

    return Object.hasOwn(scp914RecipeOutput, "Item") && typeof scp914RecipeOutput["Item"] === "string";
}

export function isSCP914ActionRecipeOutput(scp914RecipeOutput: SCP914RecipeOutput): scp914RecipeOutput is SCP914ActionRecipeOutput {
    if (isSCP914Item(scp914RecipeOutput)) {
        return false;
    }

    return Object.hasOwn(scp914RecipeOutput, "Action") && typeof scp914RecipeOutput["Action"] === "string";
}

export function isSCP914ItemCountRecipeOutput(scp914RecipeOutput: SCP914RecipeOutput): scp914RecipeOutput is SCP914ItemCountRecipeOutput {
    if (isSCP914Item(scp914RecipeOutput)) {
        return false;
    }

    return Object.hasOwn(scp914RecipeOutput, "Count") && typeof scp914RecipeOutput["Count"] === "number";
}

export function isSCP914ChanceRecipeOutput(scp914RecipeOutput: SCP914RecipeOutput): scp914RecipeOutput is SCP914ChanceRecipeOutput {
    if (isSCP914Item(scp914RecipeOutput)) {
        return false;
    }

    return Object.hasOwn(scp914RecipeOutput, "Chance") && typeof scp914RecipeOutput["Chance"] === "number";
}
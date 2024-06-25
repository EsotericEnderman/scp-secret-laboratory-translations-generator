import { rmSync} from "fs";
import { workDirectoryPath } from "../constants.js";

export function clearWorkDirectory() {
    try {
        rmSync(workDirectoryPath, {recursive: true});
    } catch (error) {

    }
}
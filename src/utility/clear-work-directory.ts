import {readdirSync, rmSync} from "fs";

export function clearWorkDirectory() {
    const outputDirectoryPath = "out";

    const contents = readdirSync(outputDirectoryPath);

    for (const content of contents) {
        rmSync(outputDirectoryPath + "/" + content, {recursive: true});
    }
}
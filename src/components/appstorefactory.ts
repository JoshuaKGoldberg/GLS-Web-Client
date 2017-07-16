import * as fs from "mz/fs";
import { createParser } from "ngls";

import { Samples } from "../samples";
import { StorageWrapper } from "../storage/storagewrapper";
import { AppStore } from "./appstore";
import { InputAreaStore } from "./editor/inputareastore";
import { InputBarStore } from "./editor/inputbarstore";
import { EditorStore } from "./editorstore";
import { OutputAreaStore } from "./preview/outputareastore";
import { OutputBarStore } from "./preview/outputbarstore";
import { PreviewStore } from "./previewstore";

/**
 * Store for an App component.
 */
export class AppStoreFactory {
    /**
     * @returns A Promise for a new instance of the AppStore class.
     */
    public async create(): Promise<AppStore> {
        const storageWrapper = new StorageWrapper("gls-web-client");
        const nglsParser = await createParser();

        const inputArea = new InputAreaStore(storageWrapper);
        const inputBar = new InputBarStore(storageWrapper, inputArea, Samples);
        const outputBar = new OutputBarStore(storageWrapper);
        const outputArea = new OutputAreaStore(outputBar, nglsParser);

        return new AppStore(
            new EditorStore(inputArea, inputBar),
            new PreviewStore(outputBar, inputArea, outputArea));
    }
}

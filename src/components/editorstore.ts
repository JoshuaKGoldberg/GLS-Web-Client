import { observable } from "mobx";

import { InputAreaStore } from "./editor/inputareastore";
import { InputBarStore } from "./editor/inputbarstore";

/**
 * Store for an Editor component.
 */
export class EditorStore {
    /**
     * Store for an InputArea component.
     */
    @observable
    public readonly inputArea: InputAreaStore;

    /**
     * Store for an InputBar component.
     */
    @observable
    public readonly inputBar: InputBarStore;

    /**
     * Initializes a new instance of the EditorStore class.
     * 
     * @param inputArea   Store for an InputArea component.
     * @param inputBar   Store for an InputBar component.
     */
    public constructor(inputArea: InputAreaStore, inputBar: InputBarStore) {
        this.inputArea = inputArea;
        this.inputBar = inputBar;
    }
}

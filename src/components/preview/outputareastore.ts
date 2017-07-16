import { ConversionContext, LanguagesBag } from "general-language-syntax";
import { action, computed, observable } from "mobx";
import { Parser as NglsParser } from "ngls";

import { OutputBarStore } from "./outputbarstore";

/**
 * Results from attempting a GLS conversion.
 */
export interface IConversionResult {
    /**
     * Any error that occured while converting.
     */
    error?: string;

    /**
     * Output lines of code from the conversion context.
     */
    outputLines: string[];
}

/**
 * Store for a OutputArea component.
 */
export class OutputAreaStore {
    /**
     * Supported GLS languages.
     */
    private static languagesBag = new LanguagesBag();

    /**
     * Store for an OutputBar component.
     */
    @observable
    public readonly outputBar: OutputBarStore;

    /**
     * The last known conversion result and any subsequent error.
     */
    @observable
    public result: IConversionResult = {
        outputLines: [],
    };

    /**
     * Parses raw string lines into GLS.
     */
    private readonly nglsParser: NglsParser;

    /**
     * Initializes a new instance of the OutputAreaStore class.
     * 
     * @param glsInputArea   Store for an InputArea component.
     * @param outputBar   Store for an OutputBar component.
     * @param nglsParser   Parses NGLS string lines into GLS.
     */
    public constructor(outputBar: OutputBarStore, nglsParser: NglsParser) {
        this.outputBar = outputBar;
        this.nglsParser = nglsParser;
    }

    /**
     * Computing a new code result.
     * 
     * @param sourceLines   Source lines of NGLS.
     * @remarks DON'T JUDGE ME
     */
    @action
    public recompute(sourceLines: string[], language: string): void {
        const conversionContext = new ConversionContext(OutputAreaStore.languagesBag[this.outputBar.language]);

        try {
            const glsLines = this.nglsParser.parseLines(sourceLines);
            const outputLines = conversionContext.convert(glsLines);

            this.result.outputLines = outputLines;
            this.result.error = undefined;
        } catch (error) {
            this.result.error = error.message;
        }
    }
}

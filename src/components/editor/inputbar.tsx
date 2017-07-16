import { observer } from "mobx-react";
import * as React from "react";

import { InputBarStore } from "./inputbarstore";
import { SampleChooser } from "./samplechooser";

/**
 * Props for an OptionsBar component.
 */
export interface IProps {
    /**
     * Store for the options bar component.
     */
    store: InputBarStore;
}

/**
 * Component for an input bar.
 */
@observer
export class InputBar extends React.Component<IProps, {}> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="options-bar input-bar">
                <div className="sub-bar samples-commands">
                    <label>Choose a sample:</label>
                    <SampleChooser
                        sample={this.props.store.sample}
                        onChange={this.props.store.setSample} />
                    <button onClick={this.onReset}>reset</button>
                </div>
            </div>);
    }

    /**
     * Resets input text to the current sample.
     */
    private onReset = (): void => {
        this.props.store.resetSampleToCurrent();
    }
}

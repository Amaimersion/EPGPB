import React from "react";
import ReactDOM from "react-dom";
import PageInfoCommon from "../_common/data/page-info";
import PageInfo from "./data/page-info";
import Authorization from "./elements/authorization";


interface Props {}

interface State {}


class App extends React.Component<Props, State> {
    public render(): JSX.Element {
        const css = PageInfo.css;
        const cssMaterialize = PageInfoCommon.cssMaterialize;

        return (
            <div
                className={css.root}
            >
                <div
                    className={`${cssMaterialize.valignWrapper} ${css.container}`}
                >
                    <Authorization />
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);

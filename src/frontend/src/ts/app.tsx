import React from "react";
import ReactDOM from "react-dom";


interface Props {}

interface State {}


class App extends React.Component<Props, State> {
    public render(): JSX.Element {
        return (
            <div>
                check
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);

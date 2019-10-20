import React from "react";


interface Props {
    reff: React.RefObject<HTMLCanvasElement>;
    create: () => any;
}

interface State {}


export default class Canvas extends React.Component<Props, State> {
    public render(): JSX.Element {
        return (
            <div
                style={{height: "auto", width: "40rem", position: "relative"}}
            >
                <canvas
                    ref={this.props.reff}
                />
            </div>
        );
    }

    public componentDidMount() {
        this.props.create();
    }
}


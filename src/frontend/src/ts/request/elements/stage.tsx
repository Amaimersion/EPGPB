import React from "react";
import PageInfoCommon from "../../_common/data/page-info";
import PageInfo from ".././data/page-info";


interface Props {
    title: string;
    items: Array<{
        title: string;
        checked: boolean;
    }>;
    dateOfCompletition?: string;
    status?: "pending" | "cancel" | "ready";
}

interface State {}


export default class Stage extends React.Component<Props, State> {
    public render(): JSX.Element {
        const css = PageInfo.css.stage;
        const cssMaterialize = PageInfoCommon.cssMaterialize;

        return (
            <div
                className={`${cssMaterialize.zDepth1} ${css.root}`}
            >
                <div
                    className={css.container}
                >
                    <p
                        className={css.title}
                    >
                        {this.props.title}
                    </p>

                    <div
                        className={css.items}
                    >
                        {
                            this.props.items.map((item, index) => {
                                return (
                                    <div
                                        className={`${css.item.common} ${item.checked ? css.item.checked : ''}`}
                                        key={index}
                                    >
                                        {item.title}
                                    </div>
                                );
                            })
                        }
                    </div>

                    {
                        typeof this.props.status !== "string" ?
                        null :
                        (
                            this.props.status === "ready" ?
                            <i
                                className={`${cssMaterialize.materialIcon} ${css.check}`}
                            >
                                {"done_all"}
                            </i> :
                            (
                                this.props.status === "pending" ?
                                <i
                                    className={`${cssMaterialize.materialIcon} ${css.pending}`}
                                >
                                    {"hourglass_empty"}
                                </i> :
                                <i
                                    className={`${cssMaterialize.materialIcon} ${css.deny}`}
                                >
                                    {"clear"}
                                </i>
                            )
                        )
                    }

                    {
                        this.props.dateOfCompletition ?
                        <p
                            className={css.dateOfCompletition}
                        >
                            {this.props.dateOfCompletition}
                        </p> :
                        null
                    }
                </div>
            </div>
        );
    }
}

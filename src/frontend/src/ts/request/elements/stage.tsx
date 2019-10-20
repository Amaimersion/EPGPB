import React from "react";
import PageInfoCommon from "../../_common/data/page-info";
import PageInfo from ".././data/page-info";


interface Props {
    title: string;
    items: Array<{
        title: string;
        checked: boolean;
    }>;
    checked?: boolean;
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
                        typeof this.props.checked !== "boolean" ?
                        null :
                        this.props.checked ?
                        <i
                            className={`${cssMaterialize.materialIcon} ${css.check}`}
                        >
                            {"check"}
                        </i> :
                        <i
                            className={`${cssMaterialize.materialIcon} ${css.deny}`}
                        >
                            {"clear"}
                        </i>
                    }
                </div>
            </div>
        );
    }
}

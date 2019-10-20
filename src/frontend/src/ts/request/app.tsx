import React from "react";
import ReactDOM from "react-dom";
import User from "../_common/db/user";
import Request from "../_common/db/request";
import PageInfoCommon from "../_common/data/page-info";
import PageInfo from "./data/page-info";
import Stage from "./elements/stage";


interface Props {}

interface State {}


class App extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    public render(): JSX.Element {
        const css = PageInfo.css;
        const cssMaterialize = PageInfoCommon.cssMaterialize;
        const accessLevel = User.currentAccessLevel() || 0;

        if (!accessLevel) {
            return (
                <p>
                    {"Пожалуйста, авторизируйтесь, чтобы просматривать эту страницу."}
                </p>
            );
        }

        let possibleStage = Request.getCompletedStage();
        let stage = 0;
        let status = 0;
        let v1Status: undefined | "ready" | "cancel" | "pending" = undefined;
        let v2Status: undefined | "ready" | "cancel" | "pending" = undefined;
        let v3Status: undefined | "ready" | "cancel" | "pending" = undefined;
        let v4Status: undefined | "ready" | "cancel" | "pending" = undefined;
        let v5Status: undefined | "ready" | "cancel" | "pending" = undefined;
        let v6Status: undefined | "ready" | "cancel" | "pending" = undefined;
        let v7Status: undefined | "ready" | "cancel" | "pending" = undefined;
        let v8Status: undefined | "ready" | "cancel" | "pending" = undefined;

        if (possibleStage) {
            stage = Number(possibleStage[0]);
            status = Number(possibleStage[2]);

            if (stage === 1) {
                if (status === 2) {
                    v1Status = "ready";
                    v2Status = "pending";
                } else if (status === 3) {
                    v1Status = "cancel";
                } else {
                    v1Status = "pending";
                }
            }

            if (stage === 2) {
                v1Status = "ready";

                if (status === 2) {
                    v2Status = "ready";
                    v3Status = "pending";
                } else if (status === 3) {
                    v2Status = "cancel";
                } else {
                    v2Status = "pending";
                }
            }

            if (stage === 3) {
                v1Status = "ready";
                v2Status = "ready";

                if (status === 2) {
                    v3Status = "ready";
                    v4Status = "pending";
                } else if (status === 3) {
                    v3Status = "cancel";
                } else {
                    v3Status = "pending";
                }
            }

            if (stage === 4) {
                v1Status = "ready";
                v2Status = "ready";
                v3Status = "ready";

                if (status === 2) {
                    v4Status = "ready";
                    v5Status = "pending";
                } else if (status === 3) {
                    v4Status = "cancel";
                } else {
                    v4Status = "pending";
                }
            }

            if (stage === 5) {
                v1Status = "ready";
                v2Status = "ready";
                v3Status = "ready";
                v4Status = "ready";

                if (status === 2) {
                    v5Status = "ready";
                    v6Status = "pending";
                } else if (status === 3) {
                    v5Status = "cancel";
                } else {
                    v5Status = "pending";
                }
            }

            if (stage === 6) {
                v1Status = "ready";
                v2Status = "ready";
                v3Status = "ready";
                v4Status = "ready";
                v5Status = "ready";

                if (status === 2) {
                    v6Status = "ready";
                    v7Status = "pending";
                } else if (status === 3) {
                    v6Status = "cancel";
                } else {
                    v6Status = "pending";
                }
            }

            if (stage === 7) {
                v1Status = "ready";
                v2Status = "ready";
                v3Status = "ready";
                v4Status = "ready";
                v5Status = "ready";
                v6Status = "ready";

                if (status === 2) {
                    v7Status = "ready";
                    v8Status = "pending";
                } else if (status === 3) {
                    v7Status = "cancel";
                } else {
                    v7Status = "pending";
                }
            }

            if (stage === 8) {
                v1Status = "ready";
                v2Status = "ready";
                v3Status = "ready";
                v4Status = "ready";
                v5Status = "ready";
                v6Status = "ready";
                v7Status = "ready";

                if (status === 2) {
                    v8Status = "ready";
                } else if (status === 3) {
                    v8Status = "cancel";
                } else {
                    v8Status = "pending";
                }
            }
        }

        return (
            <div
                className={css.root}
            >
                <div
                    className={css.logo}
                />

                <div
                    className={css.user.root}
                >
                    <p
                        className={css.user.title}
                    >
                        {User.currentName() || "?"}
                    </p>

                    <i
                        className={`${cssMaterialize.materialIcon} ${css.user.icon}`}
                        onClick={this.signOut}
                    >
                        {"exit_to_app"}
                    </i>
                </div>

                <div
                    className={`${cssMaterialize.zDepth1} ${css.container}`}
                >
                    <div
                        className={cssMaterialize.row}
                    >
                        <h4
                            style={{textTransform: "uppercase"}}
                        >
                            {"Заявка № 1"}
                        </h4>
                        <h5>
                            {`Получение финансовой поддержки (Независимые гарантии субъектов МСП) на реализацию проекта "Организация комплекса рыбодобычи с последующей переработкой в ЯНАО на Карском море."`}
                        </h5>
                    </div>

                    <div
                        className={cssMaterialize.row}
                    >
                        <div
                            className={css.progress.root}
                        >
                            <div
                                className={cssMaterialize.progress}
                            >
                                <div className={cssMaterialize.determinate} />
                            </div>
                            <div className={cssMaterialize.progress}>
                                <div className={cssMaterialize.indeterminate} />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${cssMaterialize.row} ${css.stages}`}
                    >
                        {
                            [1, 4, 6, 7, 8].includes(accessLevel) ?
                            <Stage
                                title={"Первичная анкета"}
                                items={[
                                    {
                                        title: "Заполнение",
                                        checked: true
                                    },
                                    {
                                        title: "Проверка",
                                        checked: true
                                    }
                                ]}
                                status={v1Status}
                                dateOfCompletition={((1 - stage === 0) && (status === 2 || status === 3)) ? "13.09.2019" : (1 - stage < 0 ? "13.09.2019" : undefined)}
                            /> :
                            null
                        }

                        {
                            [1, 3, 4, 7].includes(accessLevel) ?
                            <Stage
                                title={"Обращение в банк"}
                                items={[
                                    {
                                        title: "Отправление",
                                        checked: true
                                    },
                                    {
                                        title: "Проверка",
                                        checked: true
                                    }
                                ]}
                                status={v2Status}
                                dateOfCompletition={((2 - stage === 0) && (status === 2 || status === 3)) ? "13.09.2019" : (2 - stage < 0 ? "13.09.2019" : undefined)}
                            /> :
                            null
                        }

                        {
                            [1, 3, 4].includes(accessLevel) ?
                            <Stage
                                title={"Дополнительные документы"}
                                items={[
                                    {
                                        title: "Добавление",
                                        checked: true
                                    },
                                    {
                                        title: "Отправление",
                                        checked: true
                                    },
                                    {
                                        title: "Проверка",
                                        checked: true
                                    }
                                ]}
                                status={v3Status}
                                dateOfCompletition={((3 - stage === 0) && (status === 2 || status === 3)) ? "20.09.2019" : (3 - stage < 0 ? "20.09.2019" : undefined)}
                            /> :
                            null
                        }

                        {
                            [3, 4, 5, 7].includes(accessLevel) ?
                            <Stage
                                title={"Заявка из банка в МСП"}
                                items={[
                                    {
                                        title: "Отправление",
                                        checked: true
                                    },
                                    {
                                        title: "Рассмотрение",
                                        checked: true
                                    }
                                ]}
                                status={v4Status}
                                dateOfCompletition={((4 - stage === 0) && (status === 2 || status === 3)) ? "23.09.2019" : (4 - stage < 0 ? "23.09.2019" : undefined)}
                            /> :
                            null
                        }

                        {
                            [3, 4, 5, 6, 7].includes(accessLevel) ?
                            <Stage
                                title={"Прохождение кредитного комитета"}
                                items={[
                                    {
                                        title: "Отправление",
                                        checked: true
                                    },
                                    {
                                        title: "Рассмотрение",
                                        checked: true
                                    }
                                ]}
                                status={v5Status}
                                dateOfCompletition={((5 - stage === 0) && (status === 2 || status === 3)) ? "10.10.2019" : (5 - stage < 0 ? "10.10.2019" : undefined)}
                            /> :
                            null
                        }

                        {
                            [1, 3, 4, 5, 6, 7].includes(accessLevel) ?
                            <Stage
                                title={"Акцептование документов"}
                                items={[
                                    {
                                        title: "Рассмотрение",
                                        checked: true
                                    },
                                    {
                                        title: "Акцептование",
                                        checked: false
                                    }
                                ]}
                                status={v6Status}
                                dateOfCompletition={((6 - stage === 0) && (status === 2 || status === 3)) ? "12.10.2019" : (6 - stage < 0 ? "12.10.2019" : undefined)}
                            /> :
                            null
                        }

                        {
                            [1, 3, 4, 5, 6, 7].includes(accessLevel) ?
                            <Stage
                                title={"Подписание документов"}
                                items={[
                                    {
                                        title: "Подписание",
                                        checked: true
                                    },
                                    {
                                        title: "Отправление",
                                        checked: true
                                    }
                                ]}
                                status={v7Status}
                                dateOfCompletition={((7 - stage === 0) && (status === 2 || status === 3)) ? "20.10.2019" : (7 - stage < 0 ? "20.10.2019" : undefined)}
                            /> :
                            null
                        }

                        {
                            [1, 3, 4, 5, 6, 7, 8].includes(accessLevel) ?
                            <Stage
                                title={"Получение средств"}
                                items={[
                                    {
                                        title: "Ожидание",
                                        checked: false
                                    }
                                ]}
                                status={v8Status}
                                dateOfCompletition={((8 - stage === 0) && (status === 2 || status === 3)) ? "22.10.2019" : (8 - stage < 0 ? "22.10.2019" : undefined)}
                            /> :
                            null
                        }
                    </div>

                    <div
                        className={cssMaterialize.row}
                    >
                        <p
                            className={css.description.name}
                        >
                            {"Последнее сообщение:"}
                        </p>

                        <p
                            className={css.description.text}
                        >
                            {"На основании требований ФЗ № 123 от 12.34.56 требуется загрузить подписанный (с помощью цифровой подписи) договор с банком до 30.10.2019."}
                        </p>
                    </div>

                    <div
                        className={cssMaterialize.row}
                    >
                        <div
                            className={`${cssMaterialize.col} ${cssMaterialize.left} ${css.buttons} ${css.padding.left}`}
                        >
                            {
                                [3, 5].includes(accessLevel) ?
                                        <select
                                            onChange={this.handleSelect}
                                            defaultValue={"0"}
                                        >
                                            <option value="0" disabled>Укажите статус заявки для текущей стадии</option>
                                            <option value="2">Одобрено</option>
                                            <option value="3">Отклонено</option>
                                        </select>
                                    :
                                    null
                            }

                            {
                                [1, 3, 5].includes(accessLevel)  ?
                                <div
                                    className={`${cssMaterialize.button} ${cssMaterialize.blue} ${cssMaterialize.darken3}`}
                                >
                                    {"Загрузить документы"}
                                </div> :
                                null
                            }

                            {
                                [3, 4, 5, 7].includes(accessLevel) ?
                                    <div
                                        className={`${cssMaterialize.button} ${cssMaterialize.blue} ${cssMaterialize.darken3}`}
                                    >
                                        {"Сформировать отчет"}
                                    </div> :
                                    null
                            }

                            <div
                                className={`${cssMaterialize.button} ${cssMaterialize.blue} ${cssMaterialize.darken3}`}
                            >
                                {"Задать вопрос"}
                            </div>
                        </div>

                        <div
                            className={`${cssMaterialize.col} ${cssMaterialize.right} ${css.buttons} ${css.padding.right}`}
                        >
                            <div
                                className={`${cssMaterialize.button} ${cssMaterialize.red} ${cssMaterialize.darken3}`}
                            >
                                {
                                    [1].includes(accessLevel) ?
                                    "Отозвать заявку" :
                                    (
                                        [3, 5].includes(accessLevel) ?
                                        "Завершить заявку" :
                                        "Направить директиву"
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public signOut(): void {
        User.signOut();
        window.location.replace(`${window.location.origin}/access.html`);
    }

    public handleSelect(event: React.ChangeEvent<HTMLSelectElement>): void {
        const current = Request.getCompletedStage();

        if (!current) {
            return;
        }

        const selected = event.target.value;
        const stage = Number(current[0]);

        if (stage >= 8) {
            return;
        }

        Request.setStage(`${stage + 1}-${selected}`, "");

        this.forceUpdate();
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);


if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        // @ts-ignore
        M.AutoInit();
    });
} else {
    // @ts-ignore
    M.AutoInit();
}

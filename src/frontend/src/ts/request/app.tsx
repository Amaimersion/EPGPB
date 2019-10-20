import React from "react";
import ReactDOM from "react-dom";
import User from "../_common/db/user";
import PageInfoCommon from "../_common/data/page-info";
import PageInfo from "./data/page-info";
import Stage from "./elements/stage";


interface Props {}

interface State {}


class App extends React.Component<Props, State> {
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

        return (
            <div
                className={css.root}
            >
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
                        <h3>
                            {"Заявка № 1"}
                        </h3>
                        <h4>
                            {`Получение государственной гарантии на реализацию проекта "Организация комплекса рыбодобычи с последующей переработкой в ЯНАО на Карском море"`}
                        </h4>
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
                            <div
                                className={cssMaterialize.progress}
                            >
                                <div className={cssMaterialize.determinate} />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${cssMaterialize.row} ${css.stages}`}
                    >
                        {
                            [1, 3, 4, 5, 6, 7].includes(accessLevel) ?
                            <Stage
                                title={"Первичная проверка"}
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
                                status={"ready"}
                                dateOfCompletition={"13.10.2019"}
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
                                status={"pending"}
                                dateOfCompletition={"03.11.2019"}
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
                                status={"ready"}
                                dateOfCompletition={"05.11.2019"}
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
                                status={"ready"}
                                dateOfCompletition={"20.11.2019"}
                            /> :
                            null
                        }

                        {
                            [3, 4, 5, 6, 7].includes(accessLevel) ?
                            <Stage
                                title={"Заявка в кредитный комитет"}
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
                                status={"ready"}
                                dateOfCompletition={"29.11.2019"}
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
                                status={"ready"}
                                dateOfCompletition={"05.12.2019"}
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
                                status={"cancel"}
                                dateOfCompletition={"07.12.2019"}
                            /> :
                            null
                        }

                        {
                            [1, 3, 4, 5, 6, 7].includes(accessLevel) ?
                            <Stage
                                title={"Получение средств"}
                                items={[
                                    {
                                        title: "Ожидание",
                                        checked: false
                                    }
                                ]}
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
        window.location.replace(`${window.location.origin}/index.html`);
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);

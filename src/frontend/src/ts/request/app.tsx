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

        if (!User.currentAccessLevel()) {
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
                        {"Предприниматель"}
                    </p>

                    <i className={`${cssMaterialize.materialIcon} ${css.user.icon}`}>
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
                            checked={true}
                        />

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
                            checked={true}
                        />

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
                            checked={true}
                        />

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
                            checked={true}
                        />

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
                            checked={true}
                        />

                        <Stage
                            title={"Добавление и подписание документов"}
                            items={[
                                {
                                    title: "Добавление",
                                    checked: false
                                },
                                {
                                    title: "Подписание",
                                    checked: true
                                },
                                {
                                    title: "Отправление",
                                    checked: true
                                }
                            ]}
                            checked={true}
                        />

                        <Stage
                            title={"Подписание документов"}
                            items={[
                                {
                                    title: "Рассмотрение",
                                    checked: true
                                },
                                {
                                    title: "Подписание",
                                    checked: false
                                }
                            ]}
                            checked={false}
                        />

                        <Stage
                            title={"Получение средств"}
                            items={[
                                {
                                    title: "Ожидание",
                                    checked: false
                                }
                            ]}
                        />

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
                            <div
                                className={`${cssMaterialize.button} ${cssMaterialize.blue} ${cssMaterialize.darken3}`}
                            >
                                {"Загрузить документы"}
                            </div>

                            <div
                                className={`${cssMaterialize.button} ${cssMaterialize.blue} ${cssMaterialize.darken3}`}
                            >
                                {"Задать вопрос"}
                            </div>

                            <div
                                className={`${cssMaterialize.button} ${cssMaterialize.blue} ${cssMaterialize.darken3}`}
                            >
                                {"Продлить время обработки"}
                            </div>
                        </div>

                        <div
                            className={`${cssMaterialize.col} ${cssMaterialize.right} ${css.buttons} ${css.padding.right}`}
                        >
                            <div
                                className={`${cssMaterialize.button} ${cssMaterialize.red} ${cssMaterialize.darken3}`}
                            >
                                {"Отозвать заявку"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);

import React from "react";
import PageInfoCommon from "../../_common/data/page-info";
import PageInfo from "../data/page-info";


interface Props {}

interface State {}


export default class Authorization extends React.Component<Props, State> {
    public render(): JSX.Element {
        const css = PageInfo.css.authorization;
        const cssMaterialize = PageInfoCommon.cssMaterialize;

        return (
            <div
                className={css.root}
            >
                <div
                    className={css.container}
                >
                    <p
                        className={""}
                    >
                        {"Вход в систему"}
                    </p>

                    <div
                        className={cssMaterialize.row}
                    >
                        <div
                            className={cssMaterialize.row}
                        >
                            <div
                                className={`${cssMaterialize.inputField} ${cssMaterialize.col} ${cssMaterialize.s12}`}
                            >
                                <input
                                    className={cssMaterialize.validate}
                                    type={"text"}
                                    id={"login"}
                                    required={true}
                                />
                                <label htmlFor="login">
                                    {"Логин"}
                                </label>
                            </div>

                            <div
                                className={`${cssMaterialize.inputField} ${cssMaterialize.col} ${cssMaterialize.s12}`}
                            >
                                <input
                                    className={cssMaterialize.validate}
                                    type={"password"}
                                    id={"password"}
                                    required={true}
                                />
                                <label htmlFor="password">
                                    {"Пароль"}
                                </label>
                            </div>
                        </div>

                        <div
                            className={cssMaterialize.row}
                        >
                            <div
                                className={cssMaterialize.button}
                            >
                                {"Войти"}
                            </div>
                        </div>
                    </div>

                    <div
                        className={cssMaterialize.row}
                    >
                        <div
                            className={`${cssMaterialize.row} ${css.or}`}
                        >
                            <span>
                                {"или"}
                            </span>
                        </div>

                        <div
                            className={css.gosuslugi.container}
                        >
                            <div
                                className={css.gosuslugi.button}
                            >
                                <span>ГОС</span><span>УСЛУГИ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

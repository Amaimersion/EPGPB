import React from "react";
import PageInfoCommon from "../../_common/data/page-info";
import User from "../../_common/db/user";
import PageInfo from "../data/page-info";


interface Props {}

interface State {
    loginValue: string;
    passwordValue: string;
}


export default class Authorization extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);

        this.state = {
            loginValue: "",
            passwordValue: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoginValueChange = this.handleLoginValueChange.bind(this);
        this.handlePasswordValueChange = this.handlePasswordValueChange.bind(this);
    }

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
                        className={css.description}
                    >
                        {"Вход в систему ПГПБ"}
                    </p>

                    <form
                        onSubmit={this.handleSubmit}
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
                                    onChange={this.handleLoginValueChange}
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
                                    onChange={this.handlePasswordValueChange}
                                />
                                <label htmlFor="password">
                                    {"Пароль"}
                                </label>
                            </div>
                        </div>

                        <div
                            className={cssMaterialize.center}
                        >
                            <button
                                className={`${cssMaterialize.button} ${cssMaterialize.blue} ${cssMaterialize.darken3}`}
                                type={"submit"}
                            >
                                {"Войти"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    public handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (
            !this.state.loginValue ||
            !this.state.passwordValue
        ) {
            return;
        }

        const successSignIn = User.signIn(
            this.state.loginValue,
            this.state.passwordValue
        );

        if (successSignIn) {
            window.location.replace(`${window.location.origin}/main.html`);
        } else {
            alert("Неверный логин или пароль.");
        }
    }

    public handleLoginValueChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            loginValue: event.target.value
        });
    }

    public handlePasswordValueChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            passwordValue: event.target.value
        });
    }
}

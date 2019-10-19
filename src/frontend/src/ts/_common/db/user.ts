import Cookies from "js-cookie";
import Users from "../../_common/data/users";


export default abstract class User {
    public static currentAccessLevel(): number {
        const level = Cookies.get("userAccessLevel");

        if (level != undefined) {
            return Number(level);
        } else {
            return 0
        }
    }

    /**
     * @returns {number}
     * 1 - success, 0 - error.
     */
    public static signIn(login: string, password: string): number {
        let status = 0;

        for (let user of Users.data) {
            if (
                user.login === login &&
                user.password === password
            ) {
                Cookies.set("userAccessLevel", String(user.accessLevel));
                Cookies.set("userName", user.name);
                status = 1;
                break;
            }
        }

        return status;
    }
}

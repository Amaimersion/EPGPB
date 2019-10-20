export default abstract class Users {
    public static readonly data = [
        {
            login: "",
            password: "",
            accessLevel: 0,
            name: "Неавторизованный пользователь"
        },
        {
            login: "pred",
            password: "pred",
            accessLevel: 1,
            name: "Предприниматель"
        },
        {
            login: "admin",
            password: "admin",
            accessLevel: 2,
            name: "Администратор"
        },
        {
            login: "bank",
            password: "bank",
            accessLevel: 3,
            name: "Банк"
        },
        {
            login: "agency",
            password: "agency",
            accessLevel: 4,
            name: "Инвестиционное агентство"
        },
        {
            login: "msp",
            password: "msp",
            accessLevel: 5,
            name: "Корпорация МСП"
        },
        {
            login: "minek",
            password: "minek",
            accessLevel: 6,
            name: "Министерство экономического развития РФ"
        },
        {
            login: "chetpal",
            password: "chetpal",
            accessLevel: 7,
            name: "Счетная палата РФ"
        },
        {
            login: "minfin",
            password: "minfin",
            accessLevel: 8,
            name: "Министерство финансов РФ"
        }
    ];
}

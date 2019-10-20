import Cookies from "js-cookie";


export default abstract class Request {
    public static getCompletedStage() {
        return Cookies.get("requestCompletedStage");
    }

    public static getStageDescription() {
        return Cookies.get("requestStageDescription");
    }

    /**
     * Этап и стадия, которые стоят последними, считаются пройденными.
     *
     * Этап и стадии (№-№):
     * 1 - Первичная проверка:
     *  1 - не заполнена
     *  2 - успешно
     *  3 - отказ
     *
     * 2 - Заявка в банк
     *  1 - не отправлена
     *  2 - успешно
     *  3 - отказ
     *
     * 3 - Добавление дополнительных документов
     *  1 - не добавлено
     *  4 - не отправлено
     *  2 - успешно
     *  3 - отказ
     *
     * 4 - Заявка из банка в МСП
     *  1 - не отправлена
     *  4 - не рассмотрена
     *  2 - успешно
     *  3 - отказ
     *
     * 5 - Заявка в кредитный комитет
     *  1 - не отправлена
     *  4 - не рассмотрена
     *  2 - успешно
     *  3 - отказ
     *
     * 6 - Добавление дополнительных документов для заключения договора, их подписание и отправка
     *  1 - не добавлено
     *  4 - не подписано
     *  5 - не отправлено
     *  2 - успешно
     *  3 - отказ
     *
     * 7 - Подписание документов другими сторонами
     *  1 - не рассмотрено
     *  4 - не подписано
     *  2 - успешно
     *  3 - отказ
     *
     * 8 - Получение средств
     *  1 - ожидание
     *  2 - успешно
     *  3 - отказ
     */
    public static setStage(newStage: string, newDescription: string): void {
        Cookies.set("requestCompletedStage", newStage);
        Cookies.set("requestStageDescription", newDescription);
    }

    public static getName() {
        return Cookies.get("requestName");
    }

    public static setName(value: string) {
        return Cookies.set("requestName", value);
    }

    public static getNumber() {
        return Cookies.get("requestNumber");
    }

    public static setNumber(value: string) {
        return Cookies.set("requestNumber", value);
    }
}

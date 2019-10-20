import Cookies from "js-cookie";


export default abstract class Request {
    public static getCurrentStatus() {
        return Cookies.get("requestCurrentStage");
    }

    public static getCurrentDescription() {
        return Cookies.get("requestCurrentStageDescription");
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
     *  2 - не отправлено
     *  3 - успешно
     *  4 - отказ
     *
     * 4 - Заявка из банка в МСП
     *  1 - не отправлена
     *  2 - не рассмотрена
     *  3 - успешно
     *  4 - отказ
     *
     * 5 - Заявка в кредитный комитет
     *  1 - не отправлена
     *  2 - не рассмотрена
     *  3 - успешно
     *  4 - отказ
     *
     * 6 - Добавление дополнительных документов для заключения договора, их подписание и отправка
     *  1 - не добавлено
     *  2 - не подписано
     *  3 - не отправлено
     *  4 - успешно
     *  5 - отказ
     *
     * 7 - Подписание документов другими сторонами
     *  1 - не рассмотрено
     *  2 - не подписано
     *  3 - успешно
     *  4 - отказ
     *
     * 8 - Получение средств
     *  1 - ожидание
     *  2 - успешно
     *  3 - отказ
     */
    public static setStage(newStage: string, newDescription: string): void {
        Cookies.set("requestCurrentStage", newStage);
        Cookies.set("requestCurrentStageDescription", newDescription);
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

export default abstract class PageInfo {
    public static readonly css = {
        root: "custom-request",
        container: "custom-request-container",
        progress: {
            root: "custom-request-progress"
        },
        stages: "custom-request-stages",
        stage: {
            root: "custom-request-stage",
            container: "custom-request-stage-container",
            title: "custom-request-stage-title",
            items: "custom-request-stage-items",
            item: {
                common: "custom-request-stage-item",
                checked: "custom-request-stage-item-checked",
            },
            check: "custom-request-stage-check",
            deny: "custom-request-stage-deny",
            pending: "custom-request-stage-pending",
            description: "custom-request-description",
            dateOfCompletition: "custom-request-stage-date-of-completition"
        },
        description: {
            name: "custom-request-description-name",
            text: "custom-request-description-text",
        },
        buttons: "custom-request-buttons",
        padding: {
            left: "custom-padding-left",
            right: "custom-padding-right"
        },
        user: {
            root: "custom-request-user",
            title: "custom-request-user-title",
            icon: "custom-request-user-icon"
        }
    };
}

interface IComponent {
    selector: string;
    template: string;
    style?: string;
}
export function Component(config: IComponent) {
    return function<T extends {new(...args: any[]): object}>(Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args);

                const element = document.querySelector(config.selector);
                if (element) element.innerHTML = getParsedTemplate(config.template, this);

                if (config.style) {
                    const styleSheet = document.createElement("style");
                    styleSheet.type = "text/css";
                    styleSheet.innerText = config.style;
                    document.head.appendChild(styleSheet)
                }
            }
        }
    };

    function getParsedTemplate(template: string, self: any): string {
        for(let property in self) {
            const regex: RegExp = new RegExp('{{' + property + '}}', 'g');

            template = template.replace(regex, self[property]);
        }

        return template;
    }
}

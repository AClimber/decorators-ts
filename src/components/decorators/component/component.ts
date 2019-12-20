interface IComponent {
    selector: string;
    template: string;
}
export function Component(config: IComponent) {
    return function<T extends {new(...args: any[]): object}>(Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args);

                const element = document.querySelector(config.selector);
                if (element) element.innerHTML = config.template;
            }
        }
    }
}

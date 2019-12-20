import {Component} from "../../components/decorators/component/component";

@Component({
    selector: '#root',
    template: `
        <div>Home page</div>
    `
})
export class Home {
    constructor(private _title: string) {}

    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
}

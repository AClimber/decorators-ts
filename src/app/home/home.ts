import {Component} from "../../components/decorators/component/component";

@Component({
    selector: '#root',
    template: `
        <div>{{title}}</div>

        <div>{{content}}</div>
    `
})
export class Home {
    constructor(private title: string, private content: string) {}
}

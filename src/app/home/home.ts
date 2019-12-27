import {Component} from "../../components/decorators/component/component";

@Component({
    selector: '#root',
    template: `
        <div class="home-page">
            <div class="home-page_header">{{title}}</div>
    
            <div class="home-page_content">{{content}}</div>
        </div>
    `,
    style: `
    .home-page_header {
        font-size: 18px;
        font-weight: bold;
    }
    .home-page_content {
        font-size: 12px;
    }
    `
})
export class Home {
    constructor(private title: string, private content: string) {}
}

import {Home} from "./app/home/home";

export class Main {
    static run(): void {
        const homePage = new Home('Home page');
        console.log(homePage.title);
    }
}

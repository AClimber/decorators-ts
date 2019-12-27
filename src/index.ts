import {Home} from "./app/home/home";

export class Main {
    static run(): void {
        new Home('Home page', 'Some content...');
    }
}

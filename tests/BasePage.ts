import { type Page} from "@playwright/test"

export class BasePage{

    constructor (readonly page :Page){
    }

        async openLink(): Promise<void>{
            await this.page.goto("https://www.saucedemo.com/");

        }

}
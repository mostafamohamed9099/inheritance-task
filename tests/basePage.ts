import { type Page } from "@playwright/test"

export class BasePage{
    constructor ( readonly Page : Page){}

     async open(): Promise<void> {
       await this.Page.goto("https://demo.playwright.dev/todomvc/#/");
    }

}
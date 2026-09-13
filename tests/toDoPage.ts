import { type Page } from "@playwright/test"
import { BasePage } from "./basePage";

export class toDoPage extends BasePage{
    constructor ( page : Page){
        super (page);
    }


     override async open(): Promise<void> {
       await super. open();
       await this.Page.getByPlaceholder("What needs to be done?");
       await this.Page.getByTestId("todo-item");
     }
 

     async addItem(): Promise<void>{
     const todoInput = this.Page.getByPlaceholder("What needs to be done?");
     await todoInput.fill("mazen mohamed");
     await todoInput.press("Enter");
     
    

     }

}
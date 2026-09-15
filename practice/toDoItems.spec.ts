import { test , expect , type Page } from "@playwright/test"
import { toDoPage } from "./toDoPage";


test.use({
    launchOptions: { slowMo : 800},
})



test (" user can add todo item" , async ({ page })=>{
    const todoobject =  new toDoPage(page);

     await todoobject.open();
     await todoobject.addItem();

     await expect (page.getByTestId("todo-item")).toHaveCount (1);
     await expect (page.getByTestId("todo-item")).toContainText("mazen mohamed") ;
     




});

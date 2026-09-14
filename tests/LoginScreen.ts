import { Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";


 export class LoginScreen extends BasePage{

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly appLogo : Locator;

    constructor(page:Page){
        super(page);

        this.username = this.page.getByPlaceholder("Username");
        this.password = this.page.getByPlaceholder("Password");
        this.loginButton = this.page.locator('[data-test="login-button"]');
        this.appLogo = this.page.locator(".app_logo");
    }
    
async open(): Promise<void>{
    await super.openLink();
}

async actionusername (username:string ):Promise<void>{
    await this.username.fill(username);
}
async actionpassword (password : string): Promise<void>{
    await this.password.fill(password);
}
async actionLoginButton (): Promise<void>{
    await this.loginButton.click();
}



}

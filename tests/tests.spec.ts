import { expect , test } from "@playwright/test"; 
import { LoginScreen } from "./LoginScreen";

test.use({
    launchOptions: { slowMo: 1200 },
});


test("Login with valid input value", async ({page}) =>{
    
    const user = new LoginScreen (page);

    await user.open();
    await user.actionusername ("standard_user");
    await user.actionpassword ("secret_sauce");
    await user.actionLoginButton();
    await expect (user.appLogo).toHaveText("Swag Labs");

})

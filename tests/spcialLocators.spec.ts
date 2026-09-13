import { test }  from "@playwright/test"

test.use({
    launchOptions: { slowMo : 1500},
})


test (" playwright special loctors" , async ({page})=>{
    await page .goto ("https://rahulshettyacademy.com/angularpractice/");
    
})
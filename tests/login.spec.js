import {test,expect} from '@playwright/test'
import loginpage from '../pages/loginpage.js';
import credentials from '../utils/credentials.json' with {type:'json'};
import invalidcredentials from '../utils/invalidcredentials.json' with {type:'json'};

test('demoblaze login',async({page})=>{
    const login=new loginpage(page)
    await login.openapplication()
    await login.loginlink()
    await login.enterusername(credentials.username)
    await login.enterpassword(credentials.password)
    await login.clickloginbutton()
    await expect(page.locator('#logout2')).toBeVisible()
})

for (const data of invalidcredentials) {
test(`invalid login for ${data.username} ${data.password}`,async({page})=>{
    const login=new loginpage(page)
    await login.openapplication()
    await login.loginlink()
    await login.enterusername(data.username)
    await login.enterpassword(data.password)
    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe(data.expectedMessage)
        await dialog.accept()
    })
    await login.clickloginbutton()     
})
}
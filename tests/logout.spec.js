import {test,expect} from '@playwright/test'
import loginpage from '../pages/loginpage.js';
import credentials from '../utils/credentials.json' with {type:'json'};


test('demoblaze logout',async({page})=>{
    const login=new loginpage(page)
    await login.openapplication()
    await login.loginlink()
    await login.enterusername(credentials.username)
    await login.enterpassword(credentials.password)
    await login.clickloginbutton()
    await expect(page.locator('#logout2')).toBeVisible()
    await login.clicklogoutbutton() 
})
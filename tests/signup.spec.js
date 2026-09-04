import {test,expect} from '@playwright/test';
import signuppage from '../pages/signuppage.js';
import closepage from '../pages/closepage.js';
import randomdatagenerator from '../helpers/randomdatagenerator.js';

test.beforeEach(async ({page})=>{
    const signup=new signuppage(page)
    await signup.openapplication()
})
test('demoblaze signup',async({page})=>{
    const signup=new signuppage(page)
    const randomdata=new randomdatagenerator()
    await signup.signuplink()
    await signup.enterusername(randomdata.generateUsername())
    await signup.enterpassword(randomdata.generatePassword())
    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('Sign up successful.')
        await dialog.accept()
    })
    await signup.clicksignupbutton()
})

test('demoblaze close',async({page})=>{
    const close=new closepage(page)
    const randomdata=new randomdatagenerator()
    await close.signuplink()
    await close.enterusername(randomdata.generateUsername())
    await close.enterpassword(randomdata.generatePassword())
    await expect(page.getByRole('button',{name:'Close'}).nth(1)).toBeVisible()
    await close.clickclosebutton()  
})

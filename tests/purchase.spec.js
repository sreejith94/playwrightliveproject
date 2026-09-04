import {test,expect} from '@playwright/test';
import loginpage from '../pages/loginpage.js';
import credentials from '../utils/credentials.json' with {type:'json'};
//import purchasedetails from '../utils/purchasedetails.json' with {type:'json'};
import randomdatagenerator from '../helpers/randomdatagenerator.js';
import purchasepage from '../pages/purchasepage.js';

test.beforeEach(async ({page})=>{
    const login=new loginpage(page)
    await login.openapplication()
    await login.loginlink()
    await login.enterusername(credentials.username)
    await login.enterpassword(credentials.password)
    await login.clickloginbutton()
    await expect(page.locator('#logout2')).toBeVisible()
})

test('purchasetest phones',async({page})=>{

    const purchase=new purchasepage(page)
    await purchase.phonelink()
    await purchase.selectphonelink()
    await purchase.addtocartbutton()
    await purchase.clickcart()
    await purchase.placeorderbutton()
})

test('purchasetest laptops',async({page})=>{

    const purchase=new purchasepage(page)
    await purchase.laptoplink()
    await purchase.selectlaptoplink()
    await purchase.addtocartbutton()
    await purchase.clickcart()
    await purchase.placeorderbutton()
    
})

test('purchasetest monitors',async({page})=>{

    const purchase=new purchasepage(page)
    await purchase.monitorlink()
    await purchase.selectmonitorlink()
    await purchase.addtocartbutton()
    await purchase.clickcart()
    await purchase.placeorderbutton()
})

test.afterEach(async ({page})=>{

    const purchase=new purchasepage(page)
    const randomdata=new randomdatagenerator()
    await purchase.enternamevalue(randomdata.generateUsername())
    await purchase.entercountry(randomdata.generateCountry())
    await purchase.entercity(randomdata.generateCityName())
    await purchase.entercard(randomdata.generateFormattedCardNumber())
    await purchase.entermonth(randomdata.generateRandomMonth())
    await purchase.enteryear(randomdata.generateRandomYear())
    await purchase.clickpurchase()
    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible()
    await purchase.clickokbutton()

})
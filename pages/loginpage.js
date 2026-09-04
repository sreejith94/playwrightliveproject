export default class loginpage
{
    constructor(page)
    {
        this.page=page
        this.login=page.locator('#login2')
        this.username=page.locator('#loginusername')
        this.password=page.locator('#loginpassword')
        this.loginbutton=page.getByRole('button',{name:'Log in'})
        this.logout=page.locator('#logout2')
    }
    async openapplication()
    {
        await this.page.goto('https://demoblaze.com/')
    }
    async loginlink()
    {
        await this.login.click()
    }
    async enterusername(usernamevalue)
    {
        await this.username.fill(usernamevalue)
    }
    async enterpassword(passwordvalue)
    {
        await this.password.fill(passwordvalue)
    }
    async clickloginbutton()
    {
        await this.loginbutton.click()
    }
     async clicklogoutbutton()
    {
        await this.logout.click()
    }
    
}
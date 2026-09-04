export default class signuppage
{
    constructor(page)
    {
        this.page=page
        this.signup=page.locator('#signin2')
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.signupbutton=page.getByRole('button',{name:'Sign up'})
        
    }
    async openapplication()
    {
        await this.page.goto('https://demoblaze.com/')
    }
    async signuplink()
    {
        await this.signup.click()
    }
    async enterusername(usernamevalue)
    {
        await this.username.fill(usernamevalue)
    }
    async enterpassword(passwordvalue)
    {
        await this.password.fill(passwordvalue)
    }
    async clicksignupbutton()
    {
        await this.signupbutton.click()
    }
    
}
export default class purchasepage
{
    constructor(page)
    {
        this.page=page
        this.phones=page.getByRole('link', { name: 'Phones' })
        this.laptops=page.getByRole('link', { name: 'Laptops' })
        this.monitors=page.getByRole('link', { name: 'Monitors' })
        this.selectphone=page.getByRole('link', { name: 'Samsung galaxy s6' })
        this.selectlaptop=page.getByRole('link', { name: 'MacBook air' })
        this.selectmonitor=page.getByRole('link', { name: 'ASUS Full HD' })
        this.addcart=page.getByText('Add to cart')
        this.cart = page.locator('#cartur')
        this.placeorder=page.getByRole('button', { name:'Place Order'})
        this.entername=page.locator('#name')
        this.country=page.locator('#country')
        this.city=page.locator('#city')
        this.card=page.locator('#card')
        this.month=page.locator('#month')
        this.year=page.locator('#year')
        this.purchase=page.getByRole('button', { name:'Purchase'})
        this.clickok=page.getByRole('button', { name:'OK'})
        
    }
    async phonelink()
    {
        await this.phones.click()
    }
    async laptoplink()
    {
        await this.laptops.click()
    }
    async monitorlink()
    {
        await this.monitors.click()
    }
    async selectphonelink()
    {
        await this.selectphone.click()
    }
    async selectlaptoplink()
    {
        await this.selectlaptop.click()
    }
    async selectmonitorlink()
    {
        await this.selectmonitor.click()
    }
   async addtocartbutton() 
   {
    const dialogPromise = this.page.waitForEvent('dialog')

    await this.addcart.click()

    const dialog = await dialogPromise
    await dialog.accept()
  }
    async clickcart()
    {
        await this.cart.click()
    }
    async placeorderbutton()
    {
        await this.placeorder.click()
    }
    async enternamevalue(namevalue)
    {
        await this.entername.fill(namevalue)
    }
    async entercountry(country)
    {
        await this.country.fill(country)
    }
    async entercity(city)
    {
        await this.city.fill(city)
    }
    async entercard(card)
    {
        await this.card.fill(card)
    }
    async entermonth(month)
    {
        await this.month.fill(month)
    }
    async enteryear(year)
    {
        await this.year.fill(year)
    }
    async clickpurchase()
    {
        await this.purchase.click()
    }
    async clickokbutton()
    {
        await this.clickok.click()
    }
   
}
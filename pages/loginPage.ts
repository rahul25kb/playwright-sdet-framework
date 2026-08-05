import { BasePage } from "./basePage";

export class LoginPage extends BasePage{
 
    async gotoLoginPg (){
        await this.navigateTo('/login');
    }

    async login(user: string, password: string){

        await this.page.locator('[data-qa="login-email"]').fill(user);
        await this.page.locator('[data-qa="login-password"]').fill(password);
        await this.page.locator('[data-qa="login-button"]').click();
    }

    
        
}
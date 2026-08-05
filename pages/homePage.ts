import {Page} from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage{
    
 async gotoHome (){
    await this.navigateTo('/');
 }
 
 async clickOnProducts () {
   await this.page.getByRole('link', {name: 'Products'}).click();
 }

 async clickOnLogin (){
    await this.page.getByRole('link', {name: 'Signup / Login'} ).click();
 }

    
}

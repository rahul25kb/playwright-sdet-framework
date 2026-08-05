import {test as base} from '@playwright/test'
import { HomePage } from './homePage'
import { LoginPage } from './loginPage'
import { ProductsPage } from './productPage'

export const test = base.extend <{
    homePage: HomePage;
    loginPage: LoginPage;
    productPage: ProductsPage;
}>({
    homePage: async({page}, use)=>{
        const homePage = new HomePage(page);
        await homePage.gotoHome();
        await use(homePage);
    },

    loginPage: async({page}, use)=>{
        await use(new LoginPage(page));
    },

    productPage: async({page}, use)=>{
        await use(new ProductsPage(page));
    }
})

export {expect} from '@playwright/test';
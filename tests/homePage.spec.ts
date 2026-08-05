import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productPage';

let homePage: HomePage;
    let loginPage: LoginPage;
    let productsPage: ProductsPage;

test.beforeEach(async ({page})=>{
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);

        await homePage.gotoHome();
        await homePage.clickOnLogin();
    })


test.describe('Login functionality', ()=> {
    
    
    const loginTestCases = [
        {description: 'invalid credential', email: 'abc@acc.com', password: 'invalid', successful: false},
        
        {description: 'valid credential', email: 'rahul26kb@gmail.com', password: 'test@789', successful: true}
        
    ];

    for(const testcase of loginTestCases){
    test (`user login with ${testcase.description}`, async ({page})=>{
        await loginPage.login(testcase.email, testcase.password);

        if(testcase.successful){
            await expect(page.getByText('Logged in as Rahul')).toBeVisible();
        } else {
            await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
        }
        
    })
    }
})

test.describe ('add product to cart', ()=>{

    test ('go to products page', async ({page}) =>{
        await homePage.clickOnProducts();
    })

    test ('user add 1st product in cart', async ({page})=>{
        await homePage.clickOnProducts();
        await productsPage.addProductToCart(1);
    })
    
})
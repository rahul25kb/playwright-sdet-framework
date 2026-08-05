import {test, expect} from '../pages/fixtures' ;


test ('user login and add product in cart', async({page,homePage, loginPage })=>{

    await homePage.clickOnLogin();
    await loginPage.login('rahul26kb@gmail.com','test@789');
    await expect(page.getByText('Logged in as Rahul')).toBeVisible();
})

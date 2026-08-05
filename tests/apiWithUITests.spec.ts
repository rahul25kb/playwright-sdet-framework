import {test, expect} from '../pages/fixtures'



test ('API-fatched product name matches what UI displays', async({page, request, homePage})=>{

// API fatched product name 
 const response = await request.get('api/productsList');
 const body = await response.json();
 const firstProducName = body.products[0].name;
 
 //veriy that the exact data displays on the UI as well

 await homePage.clickOnProducts();
 await expect (page.getByText(firstProducName).first()).toBeVisible();

})


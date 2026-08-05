import {Page} from '@playwright/test';
import { BasePage } from './basePage';

export class ProductsPage extends BasePage {

    async gotoProductPage() {
        await this.navigateTo('/products');
    }

    async addProductToCart(productId: number){
        await this.page.locator(`[data-product-id="${productId}"]`).first().click();
    }
    

}

import {test, expect, request} from '@playwright/test'

test ('Get products list return success', async({request})=>{

    const response = await request.get('/api/productsList');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.products.length).toBeGreaterThan(0);
    expect(body.products[0]).toHaveProperty('id');
    expect(body.products[0]).toHaveProperty('name');

    console.log('First product is', body.products[0].name);

});

test('Verify login functionality', async({request})=>{

    const response = await request.post('/api/verifyLogin', {
        form: {
            email: 'rahul26kb@gmail.com',
            password: 'test@789'
        }
    });

    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body.message).toBe('User exists!')
    console.log(body);

})

test('Verify the login functionality with Invalid cred', async({request})=>{
    const response = await request.post('/api/verifyLogin', {
        form: {
            email: 'rahul26kb@gmail.com',
            password: 'wrongpass'
        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.responseCode).toBe(404);
    expect(body.message).toBe('User not found!')
    
})

const apiLoginTestcase = [
    {
        description: 'valid credentials',
        email:'rahul26kb@gmail.com',
        password: 'test@789',
        expectedResponseCode : 200,
        expectedMessage : 'User exists!'
    },
    {
        description: 'invalid credentials',
        email:'rahul26kb@gmail.com',
        password: 'wrong',
        expectedResponseCode : 404,
        expectedMessage : 'User not found!'
    }
]

for(const testcase of apiLoginTestcase){

    test(`User login with ${testcase.description}`, async({request})=>{
        const response = await request.post('/api/verifyLogin',{
            form: {
                email : testcase.email,
                password : testcase.password
            }
        })

        const body = await response.json();
        expect(response.status()).toBe(200);
        expect(body.responseCode).toBe(testcase.expectedResponseCode);
        expect(body.message).toBe(testcase.expectedMessage);
        
    })
}
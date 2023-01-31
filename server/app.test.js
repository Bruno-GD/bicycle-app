const { describe, test, expect } = require('@jest/globals');
const app = require('./app');
const request = require('supertest');
const ShopModel = require('../models/Shop.model');

describe('app', () => {

    test('should return 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

});

describe('/shop', () => {

    test('index', async () => {
        const response = await request(app).get('/shop');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(3);
        response.body.forEach(shop => {
            expect(ShopModel.validate(shop).error).toBeUndefined();
        });
    });

    test('shop id', async () => {
        const response = await request(app).get('/shop/1')
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body).toBeInstanceOf(Object);
        let shop = response.body;
        expect(ShopModel.validate(shop).error).toBeUndefined();
    });

    test('undefined shop id', async () => {
        const response = await request(app).get('/shop/4')
        expect(response.statusCode).toBe(404);
        expect(response.body).toBeDefined();
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body.error).toBeDefined();
    });

});

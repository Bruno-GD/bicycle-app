const ShopModel = require('../models/shop.model');
const {describe, test, expect} = require('@jest/globals');

describe('Shop Model', () => {
    test('name should be valid', () => {
        const shop = {
            id: 1,
            name: 'Shop 1'
        };
        const result = ShopModel.validate(shop);
        expect(result.error).toBeUndefined();
    });

    test('name should be invalid', () => {
        const shop = {
            id: 1,
            name: ''
        };
        const result = ShopModel.validate(shop);
        expect(result.error).not.toBeUndefined();
    });

    test('id should be invalid', () => {
        const shop = {
            name: 'Shop 1'
        };
        const result = ShopModel.validate(shop);
        expect(result.error).toBeDefined();
    });

    test('id should be valid (mongodb)', () => {
        const shop = {
            _id: 1,
            name: 'Shop 1'
        };
        const result = ShopModel.validate(shop);
        expect(result.error).toBeUndefined();
    });
});
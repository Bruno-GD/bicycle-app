const {describe, test, expect} = require('@jest/globals');
const ShopRepository = require('../data/ShopRepository');

describe('ShopRepository', () => {
    test('findById', async () => {
        const shop = await ShopRepository.findById(1);
        expect(shop).not.toBeNull();
    });

    test('findByName', async () => {
        const shops = await ShopRepository.findByName('Shop 1');
        expect(shops).toBeDefined();
        expect(shops.length).toBe(1);
    });

    test('findAll', async () => {
        const shops = await ShopRepository.findAll();
        expect(shops).toBeDefined();
        expect(shops.length).toBeGreaterThan(0);
    });

    test('create', async () => {
        await ShopRepository.create({
            name: 'Shop Test Creation',
        });
        const shops = await ShopRepository.findByName("Shop Test Creation");
        expect(shops).toBeDefined();
        expect(shops.length).toBeGreaterThan(0);
        expect(shops[0]).toBeDefined();
        expect(shops[0].id ?? shops[0]._id.toString()).toBeDefined();
    });

    test('update', async () => {
        await ShopRepository.update(1, {
            name: 'Shop 1 Updated',
        });
        const shop = await ShopRepository.findById(1);
        expect(shop).toBeDefined();
        expect(shop.id ?? shop._id).toBe(1);
        expect(shop.name).toBe('Shop 1 Updated');
    });

    test('remove', async () => {
        await ShopRepository.remove(1);
        const shop = await ShopRepository.findById(1);
        expect(shop).toBeFalsy();
    });
});
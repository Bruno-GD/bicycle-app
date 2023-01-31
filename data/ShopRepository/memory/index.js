const DATA = require('../../../db/memory')

function findById(id) {
    return new Promise((resolve, reject) => {
        resolve(DATA.Shop.find(shop => shop.id === id));
    });
}

function findByName(name) {
    return new Promise((resolve, reject) => {
        resolve(DATA.Shop.filter(shop => shop.name.includes(name)));
    });
}

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(DATA.Shop);
    });
}

function create(shop) {
    return new Promise((resolve, reject) => {
        shop.id = Math.max(...DATA.Shop.map(shop => shop.id), 0) + 1;
        DATA.Shop.push(shop);
        resolve(shop);
    });
}

function update(id, shop) {
    return new Promise((resolve, reject) => {
        const index = DATA.Shop.findIndex(shop => shop.id === id);
        shop.id = id; // Make sure the id is not changed
        DATA.Shop[index] = shop;
        resolve(shop);
    });
}

function remove(id) {
    return new Promise((resolve, reject) => {
        const index = DATA.Shop.findIndex(shop => shop.id === id);
        DATA.Shop.splice(index, 1);
        resolve();
    });
}

module.exports = {
    findById,
    findByName,
    findAll,
    create,
    update,
    remove
}
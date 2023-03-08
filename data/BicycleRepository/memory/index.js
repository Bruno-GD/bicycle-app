const DATA = require('../../../db/memory')

function findById(id) {
    return new Promise((resolve, reject) => {
        resolve(DATA.Bike.find(bike => bike.id === id));
    });
}

function findByName(name) {
    return new Promise((resolve, reject) => {
        resolve(DATA.Bike.filter(bike => bike.name.includes(name)));
    });
}

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(DATA.Bike);
    });
}

function create(bike) {
    return new Promise((resolve, reject) => {
        bike.id = Math.max(...DATA.Bike.map(bike => bike.id), 0) + 1;
        DATA.Bike.push(bike);
        resolve(bike);
    });
}

function update(id, bike) {
    return new Promise((resolve, reject) => {
        const index = DATA.Bike.findIndex(bike => bike.id === id);
        bike.id = id; // Make sure the id is not changed
        DATA.Bike[index] = bike;
        resolve(bike);
    });
}

function remove(id) {
    return new Promise((resolve, reject) => {
        const index = DATA.Bike.findIndex(bike => bike.id === id);
        DATA.Bike.splice(index, 1);
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
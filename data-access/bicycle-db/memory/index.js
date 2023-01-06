const DATA = require('../../../db/memory/bicycle');
const Bicycle = require("../../../models/bicycle");
LAST_ID = Math.max(...DATA.map(b => b.id));

/**
 * List all bicycles
 * @returns {[{image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date},{image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date}]|{}}
 */
function findAll() {
    return DATA;
}

/**
 * Filter bicycles with a given filter
 * @param key - key to find
 * @param value - value to filter
 * @returns {{image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date} | {image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date}}
 */
function findBy(key, value) {
    return DATA.find(f => f[key].toString() === value);
}

/**
 * Delete first occurrence that matches the given filter
 * and returns the deleted object
 * @param key - key to find
 * @param value - value to filter
 * @returns {({image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date}|{image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date})[]}
 */
function deleteBy(key, value) {
    let idx = DATA.findIndex(f => f[key].toString() === value);
    return DATA.splice(idx, 1);
}

/**
 * Create a new bicycle
 * @param bicycle
 * @throws {Error} if bicycle validation fails
 * @returns Bicycle
 */
function create(bicycle) {
    let valid = Bicycle.validate(bicycle);
    if (valid.error)
        throw valid.error;

    valid.value.id = ++LAST_ID;
    DATA.push(valid.value);
    return valid.value;
}

/**
 * Update first occurrence that matches the given filter
 * and returns the updated object
 * @param key - key to find
 * @param value - value to filter
 * @param bicycle - new bicycle data
 * @throws {Error} if bicycle validation fails
 * @returns Bicycle
 */
function update(key, value, bicycle) {
    let valid = Bicycle.validate(bicycle);
    if (valid.error)
        throw valid.error;

    let idx = DATA.findIndex(f => f[key].toString() === value);
    bicycle.id = DATA[idx].id;
    bicycle.createdAt = DATA[idx].createdAt;
    bicycle.updatedAt = new Date();
    DATA[idx] = bicycle;
    return bicycle;
}

module.exports = {
    findAll,
    findBy,
    deleteBy,
    create,
    update
}
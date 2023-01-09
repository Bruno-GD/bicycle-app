const Bicycle = require("../../../db/mongodb/models/bicycle");
const BicycleModel = require("../../../models/bicycle");
const serialize = require("./serializer");

/**
 * List all bicycles
 * @returns {[{image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date},{image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date}]|{}}
 */
function findAll() {
    return Bicycle.find({}).then(serialize);
}

/**
 * Filter bicycles with a given filter
 * @param key - key to find
 * @param value - value to filter
 * @returns Promise{{image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date} | {image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date}}
 */
function findBy(key, value) {
    return Bicycle.find({[key]: value}).then(serialize);
}

/**
 * Delete first occurrence that matches the given filter
 * and returns the deleted object
 * @param key - key to find
 * @param value - value to filter
 * @returns Promise{({image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date}|{image: string, createdAt: Date, color: string, price: number, name: string, weight: number, description: string, id: number, category: string, stock: number, brand: string, updatedAt: Date})[]}
 */
function deleteBy(key, value) {
    return Bicycle.findOneAndDelete({[key]: value}).then(serialize);
}

/**
 * Create a new bicycle
 * @param bicycle
 * @throws {Error} if bicycle validation fails
 * @returns Bicycle
 */
function create(bicycle) {
    let valid = BicycleModel.validate(bicycle);
    if (valid.error)
        throw valid.error;

    return Bicycle.create(valid.value).then(serialize);
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
    let valid = BicycleModel.validate(bicycle);
    if (valid.error)
        throw valid.error;

    return Bicycle
        .findOneAndUpdate({[key]: value}, valid.value, {returnOriginal: false})
        .then(serialize);
}

module.exports = {
    findAll,
    findBy,
    deleteBy,
    create,
    update
}
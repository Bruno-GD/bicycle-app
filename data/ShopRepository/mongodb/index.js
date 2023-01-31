const { connect } = require('../../../db/mongodb');

async function getCollection() {
    let conn = await connect();
    return conn.collection('shop');
}

async function findById(id) {
    let Shop = await getCollection();
    return Shop.findOne({ _id: id });
}

async function findByName(name) {
    let Shop = await getCollection();
    return await Shop.find({ name: { $regex: name } }).toArray();
}

async function findAll() {
    let Shop = await getCollection();
    return await Shop.find({}).toArray();
}

async function create(shop) {
    let Shop = await getCollection();
    return await Shop.insertOne(shop);
}

async function update(id, shop) {
    let Shop = await getCollection();
    return Shop.findOneAndUpdate({ _id: id }, { $set: shop }, { new: false });
}

async function remove(id) {
    let Shop = await getCollection();
    return Shop.findOneAndDelete({ _id: id });
}

module.exports = {
    findById,
    findByName,
    findAll,
    create,
    update,
    remove
}

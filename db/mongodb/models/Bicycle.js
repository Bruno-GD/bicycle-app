const mongoose = require('../connection');

const Schema = mongoose.Schema;
const BicycleSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    color: String,
    price: Number,
    weight: Number,
    description: String,
    image: String,
    category: String,
    brand: String,
    stock: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Bicycle = mongoose.model('Bicycle', BicycleSchema);
module.exports = Bicycle;
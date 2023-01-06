const Joi = require('joi');

const bicycleSchema = Joi.object({
    id: Joi.number().id(),
    name: Joi.string().required(),
    color: Joi.string().required(),
    price: Joi.number().integer().required(),
    weight: Joi.number().integer().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    category: Joi.string().required(),
    brand: Joi.string().required(),
    stock: Joi.number().integer().required(),
    createdAt: Joi.date().default(Date.now()),
    updatedAt: Joi.date().default(Date.now()),
});

module.exports = bicycleSchema;
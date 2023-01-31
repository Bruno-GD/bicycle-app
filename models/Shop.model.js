const joi = require('joi');

module.exports = joi.compile({
    id: joi.number(),
    _id: joi.any().when('id', {
        is: joi.exist(),
        then: joi.forbidden(),
        otherwise: joi.required()
    }),
    name: joi.string().required()
});
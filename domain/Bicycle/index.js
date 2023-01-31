
/**
 * @class Bicycle
 * @property {string} Model
 */
function Bicycle(modelId, price, currentStock = 0) {
    // TODO: check if modelId exists in database
    this.#modelId = modelId;
    this.#price = price;
    this.#stock = currentStock;
}

Bicycle.prototype = {
    get Model() {
        // TODO: get model from database
        throw new Error('Not implemented');
    },

    set Model(v) { throw new Error('Cannot set model, it is read-only') },
}

module.exports = Bicycle;
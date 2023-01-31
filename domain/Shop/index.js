
function Shop(uuid) {
    this._uuid = uuid;
}

Shop.prototype = {
    getItems() {
        // TODO: get items from database
        throw new Error('Not implemented');
    },

    getItem(id) {
        // TODO: get item from database
        throw new Error('Not implemented');
    },

    addItem(item) {
        // TODO: add item to database
        throw new Error('Not implemented');
    },

    updateItem(id, item) {
        // TODO: update item in database
        throw new Error('Not implemented');
    },

    deleteItem(id) {
        // TODO: delete item from database
        throw new Error('Not implemented');
    }
}

module.exports = Shop;
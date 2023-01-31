const ShopRepository = require('../../data/ShopRepository');

/**
 * Retreive all shops
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
async function index(req, res) {
    let shops = await ShopRepository.findAll();
    res.json(shops);
}

/**
 * Find one shop
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
async function findById(req, res) {
    let shop = await ShopRepository.findById(parseInt(req.params.id))

    if (!shop)
        return res.status(404).json({ error: 'Shop not found' });

    res.json(shop);
}

module.exports = {
    index,
    findById
}
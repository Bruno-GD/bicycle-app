const BicycleRepository = require('../../data/BicycleRepository');

/**
 * Retreive all bike models
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
async function index(req, res) {
    let bikes = await BicycleRepository.findAll();
    res.json(bikes);
}

/**
 * Retreive one bike
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
async function findById(req, res) {
    let bike = await BicycleRepository.findById(parseInt(req.params.id))

    if (!bike)
        return res.status(404).json({ error: 'Bike not found' });

    res.json(bike);
}

module.exports = {
    index,
    findById
}
const mongoose = require('mongoose');
const Bicycle = require('../models/bicycle');

mongoose.connection.collections.bicycles.drop(async function() {
    await Bicycle.create([
        {
            name: "Bicicleta 1",
            color: "Rojo",
            price: 100,
            weight: 10,
            description: "Bicicleta 1",
            image: ".jpg",
            category: "Bicicleta",
            brand: "Marca 1",
            stock: 10,
            createdAt: new Date(2021, 1, 1),
            updatedAt: new Date(2021, 1, 2)
        },
        {
            name: "Bicicleta 2",
            color: "Azul",
            price: 200,
            weight: 20,
            description: "Bicicleta 2",
            image: ".jpg",
            category: "Bicicleta",
            brand: "Marca 2",
            stock: 20,
            createdAt: new Date(2021, 1, 1),
            updatedAt: new Date(2021, 1, 2)
        }
    ]);

    console.log('Bicycles populated');
});

function _serializeSingle(bicycle) {
    return {
        id: bicycle.id,
        name: bicycle.name,
        color: bicycle.color,
        price: bicycle.price,
        weight: bicycle.weight,
        description: bicycle.description,
        image: bicycle.image,
        category: bicycle.category,
        brand: bicycle.brand,
        stock: bicycle.stock,
        createdAt: bicycle.createdAt,
        updatedAt: bicycle.updatedAt
    };
}

function serializer(data) {
    if (!data) return null;

    if (Array.isArray(data)) {
        return data.map(_serializeSingle);
    }

    return _serializeSingle(data);
}

module.exports = serializer;

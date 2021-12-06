const { buildSchema } = require('graphql');


const schema = buildSchema(`
    type Query {
        cars: [Car]
    }
    type Car {
        model: String
        price: Float
        images: [String]
        engine: String
        mileage: String
        seatingCapacity: Int
        fuelType: String
        transmission: String
    }
`);

module.exports = schema;
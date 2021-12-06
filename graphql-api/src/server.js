const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema");
const fs = require('fs-extra');
const cors = require('cors')

const data = fs.readJSONSync(`${__dirname}/data/cars.json`, 'utf8');

const app = express();
const root = {
    cars() {
        return data;
    }
};

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});

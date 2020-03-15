const express = require('express');
const graphqlHTTP = require('express-graphql');
// middleware
const schema = require('./schema/schema.gql');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://lisacee:baxterdog5@ds013004.mlab.com:13004/gql-ninja');
mongoose.connection.once('open', () => {
    console.log('Connected to DB')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=> {
    console.log('Listening on port 4000');
});
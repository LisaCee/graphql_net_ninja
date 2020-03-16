const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.gql');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors);

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
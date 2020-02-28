const express = require('express');
const graphqlHTTP = require('express-graphql');
// middleware


const app = express();

app.use('/graphql'.graphqlHTTP({
    
}));

app.listen(4000, ()=> {
    console.log('Listening on port 4000');
});
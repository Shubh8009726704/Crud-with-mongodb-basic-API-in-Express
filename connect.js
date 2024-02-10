// const MongoClient = require('mongodb').MongoClient
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db('ramanthpur');
    return db.collection('students')
}

module.exports = dbConnect
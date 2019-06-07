// options for pg-promise
const initOptions = {
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    console.log('this is contents of cp', cp);
    console.log('Connected to database:', cp.database);
  },
  disconnect(client, dc) {
    const cp = client.connectionParameters;
    console.log('this is contents of cp', cp);
    console.log('Disconnecting from database:', cp.database);
  },
  query(e) {
    console.log('QUERY:', e.query);
  },
  receive(data, result, e) {
    console.log("this is data", data);
    console.log('DATA: ', data);
  }
}

// requires
const pgp = require('pg-promise')(initOptions);
require('dotenv').config();

// cn
const connectionString = "postgres://fepshodk:Tv0mbp7n8W_12bsFOnV3i23xCGSd8mXx@raja.db.elephantsql.com:5432/fepshodk";

// connect to DB
const db = pgp(connectionString);
db.connect();

module.exports = db;
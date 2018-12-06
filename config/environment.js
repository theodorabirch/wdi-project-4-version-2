const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/AvoCardio';
const secret = process.env.SECRET || 'JSONMomoa';
module.exports = { port, dbURI, secret };

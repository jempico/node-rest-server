const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8000;

app.use(express.json());

// Routes
const route = require('./api/route')

// Run Middlewares
exports.run = () => app.use('/', route);

app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})
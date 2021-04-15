const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;


app.use(express.json());

let user = {
    name: 'Jemimah',
    age: 31
}

exports.run = () => {
app.get("/:user", function(req, res) {
    const {id} = req.params;
    user.reqUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    res.json({
        name: user.name,
        age: user.age,
        requestedURL: user.reqUrl
    })
})
}

app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})
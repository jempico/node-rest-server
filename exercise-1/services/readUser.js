const userModel = require("../models/user");
const userMock = require("./createUser")

// READ USER
const readUser = (req, res) => {
        const {name} = req.params;
        userMock.name = name;
        userMock.reqUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        
        res.json({
            name: userMock.name,
            age: userMock.age,
            requestedURL: userMock.reqUrl
        })
        
    }

module.exports = readUser;
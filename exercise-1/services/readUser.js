let user = {
    name: 'Jemimah',
    age: 31
}

// READ USER
const readUser = (req, res) => {
        const {id} = req.params;
        user.reqUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    
        res.json({
            name: user.name,
            age: user.age,
            requestedURL: user.reqUrl
        })
        
    }

module.exports = readUser;
//Factory pattern

class User {
    constructor(name, age, reqUrl) {
        this.name = name;
        this.age = age;
        this.reqUrl = reqUrl;
    } 
}

function userFactory(name, age, reqUrl) {
    return new User(name, age, reqUrl)
}

module.exports = userFactory;
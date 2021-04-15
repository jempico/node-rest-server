const userModel = require('../models/user')

//Hardcoding a fake user for the purpose of the exercise, in real world this should be stored in a DB.
let userMock = {
    name: 'Jemimah',
    age: 31
}

//Creating and exporting an instance of a User for the purpose of this exercise.

let newUser = userModel(userMock.name, userMock.age)

module.exports = newUser;
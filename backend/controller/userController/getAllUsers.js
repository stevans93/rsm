const UserModel = require('../../models/userModel');

const getAllUsers = (req, res) => {
    UserModel.find({})
        .then((users) => {
            console.log(users);
        }).
        catch((err) => {
            console.log(err);
        });
}

module.exports = getAllUsers;
const UserModel = require('../../models/userModel');

const getAllUsers = (req, res) => {
    UserModel.find({})
        .then((users) => {
            res.status(200).send(users);
        }).
        catch((err) => {
            console.log(err);
        });
}

module.exports = getAllUsers;
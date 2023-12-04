const UserModel = require('../../models/userModel');

const getAllUsers = (req, res) => {
  console.log(res.file)
  res.status(200).json('uploaded')
}

module.exports = getAllUsers;
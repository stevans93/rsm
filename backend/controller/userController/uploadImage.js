const UserModel = require('../../models/userModel');

const uploadImage = (req, res) => {
  console.log(res.file)
  res.status(200).json('uploaded')
}

module.exports = uploadImage;
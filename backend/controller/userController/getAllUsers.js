const UserModel = require("../../models/userModel");

const getAllUsers = async (req, res) => {
  const pageNumber = parseInt(req.query.pageNumber) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  try {
    const totalUsers = await UserModel.countDocuments({});
    const totalPages = Math.ceil(totalUsers / pageSize);

    const users = await UserModel.find({})
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);

    res.status(200).send({
      users,
      totalPages,
      currentPage: pageNumber,
      pageSize,
      totalUsers,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = getAllUsers;

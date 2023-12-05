const MunicipalityModel = require("../../models/municipalityModel");

const editManicipality = async (req, res) => {
  const { id } = req.params;
  const newManicipality = req.body;
  const updateManicipality = await MunicipalityModel.findByIdAndUpdate(
    id,
    newManicipality,
    { new: true }
  );
  res.status(200).json({ msg: "Successfully updated", updateManicipality });
};

module.exports = editManicipality;

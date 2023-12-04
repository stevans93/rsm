const MunicipalityModel = require('../../models/municipalityModel');

const getAllMunicipality = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 2;

        const totalCount = await MunicipalityModel.countDocuments({});
        const totalPages = Math.ceil(totalCount / limit);

        const municipalities = await MunicipalityModel.find({})
            .skip((page - 1) * limit)
            .limit(limit);

        res.status(200).json({
            municipalities,
            currentPage: page,
            totalPages,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = getAllMunicipality;

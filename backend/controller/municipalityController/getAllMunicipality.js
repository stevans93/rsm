const MunicipalityModel = require('../../models/municipalityModel');

const getAllMunicipality = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 2;
        const district = req.query.district || null;
        const search = req.query.search || ''

        const districtSearch = district ? { district: district } : null
        const searchFilter = search ? { municipality: { $regex: search, $options: 'i' } } : null

        const totalCount = await MunicipalityModel.countDocuments({ ...districtSearch, ...searchFilter });
        const totalPages = Math.ceil(totalCount / limit);

        const municipalities = await MunicipalityModel.find({ ...districtSearch, ...searchFilter })
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

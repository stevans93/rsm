const MunicipalityModel = require('../../models/municipalityModel');

const getAllMunicipality = (req, res) => {
    MunicipalityModel.find({})
        .then((municipalities) => {
            res.status(200).send(municipalities);
        }).
        catch((err) => {
            console.log(err);
        });
}

module.exports = getAllMunicipality;
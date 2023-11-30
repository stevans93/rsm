const MunicipalityModel = require('../../models/municipalityModel');

const addMunicipality = (req, res) => {
    const municipality = req.body;

    const addNewMunicipality = new MunicipalityModel(municipality);

    addNewMunicipality.save()
        .then((addNewMunicipality) => {
            console.log(addNewMunicipality);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = addMunicipality;
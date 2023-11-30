const CityOfBelgradeModel = require('../../models/cityOfBelgradeModel');

const addMunicipalityToBelgrade = (req, res) => {
    const municipality = req.body;

    const addNewMunicipality = new CityOfBelgradeModel(municipality);

    addNewMunicipality.save()
        .then((addNewMunicipality) => {
            console.log(addNewMunicipality);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = addMunicipalityToBelgrade;